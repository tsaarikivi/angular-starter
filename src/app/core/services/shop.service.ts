import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { TicketType } from '@app/types';

@Injectable()
export class ShopService {
  constructor(private afFirestore: AngularFirestore) {}

  public getEventTicketTypesByCategory(
    event: string,
    category: string
  ): Observable<TicketType[]> {
    return this.afFirestore
      .collection('events')
      .doc(event)
      .collection<TicketType>('ticketTypes', ref =>
        ref.where(`categories.${category}`, '==', true)
      )
      .valueChanges();
  }
}
