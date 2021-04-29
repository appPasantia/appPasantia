import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import firebase from "firebase/app";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasantiaService {


  constructor(private database: AngularFirestore) {


  }


  createPasantias(data: any, path : string , id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);

  }
  getPasantias(path : string , id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges();
  }
  getCollectionPasantia<tipo>(path: string){
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();
  }
  getID(){
    return this.database.createId();
  }
}
