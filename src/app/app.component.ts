import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';

import { Entity } from '@app/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private entitiesCollection: AngularFirestoreCollection<Entity>;
  public entitiesObservable: Observable<Entity[]>;
  public user: Observable<firebase.User>;

  constructor(
    private afFirestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.entitiesCollection = afFirestore.collection<Entity>('entities', ref =>
      ref.where('creatorId', '==', 'XlVpHo3mzVeTcjwlbPRWwgu11Ib2')
    );

    this.user = afAuth.authState;

    this.entitiesObservable = this.entitiesCollection
      .valueChanges()
      .switchMap(entities => this._fetchInternalValues(entities));
  }

  _fetchInternalValues(entities: Entity[]): Observable<Entity[] | any> {
    const valueGettorObservables = entities.map((entity, i) =>
      this._createValueGettorObservable(entity, i)
    );
    return Observable.combineLatest(...valueGettorObservables).debounceTime(50);
  }

  _createValueGettorObservable(entity: Entity, i: number): Observable<Entity> {
    let valueGettor: Observable<Entity>;

    if (i === 0) {
      valueGettor = Observable.timer(5000).map(_ => entity);
    } else if (entity.friendRef) {
      valueGettor = Observable.fromPromise(
        entity.friendRef
          .get()
          .then(doc => doc.data())
          .then(friendData => ({ ...entity, friendData }))
      );
    } else {
      valueGettor = Observable.of(entity);
    }

    return valueGettor.startWith(undefined);
  }

  addItem(): void {
    this.entitiesCollection.add({
      friendRef: this.afFirestore
        .collection('entities')
        .doc('Ed86DnyInU2gaco6sRfG').ref,
      creatorId: 'XlVpHo3mzVeTcjwlbPRWwgu11Ib2',
      displayName: 'TEST',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  updateItemMore(): void {
    const docRef = this.afFirestore
      .collection('entities')
      .doc('AJbLbsZrS3SChyzbx6pL').ref;

    const promises = [];

    for (let i = 0; i < 10; i++) {
      promises.push(
        this.afFirestore.firestore.runTransaction(t =>
          t.get(docRef).then(doc => {
            const newIndex = doc.data().i + 1;
            return t.update(docRef, { i: newIndex });
          })
        )
      );
    }

    Promise.all(promises)
      .then(console.log)
      .catch(console.error);
  }

  signIn(): void {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
