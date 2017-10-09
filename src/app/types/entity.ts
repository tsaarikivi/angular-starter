import { DocumentReference, FieldValue } from 'firebase/firestore';

export interface Entity {
  displayName: string;
  timestamp: Date | FieldValue;
  friendRef?: DocumentReference;
  friendData?: Entity;
  creatorId: string;
}
