import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import firebase from "firebase/app";
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;

  constructor( public afAuth: AngularFireAuth, private afs: AngularFirestore) { 
  }
  
  
  async loginGoogle() {
    alert('login')
    const googleUser = await Plugins.GoogleAuth.signIn();
  }

  

  async logout() :  Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }

}
