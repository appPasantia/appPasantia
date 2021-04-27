import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import firebase from "firebase/app";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;

  constructor( public afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    )
  }
  
  async resetPwd(email: string) :  Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email); 
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }
  
  async loginGoogle() :  Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider );
      this.updateUserData(user);
      return user; 
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }

  async sendVerificationEmail() :  Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification(); 
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }

  isEmailVerified(user: User): boolean{
    return user.emailVerified === true ? true : false;
  }

  async register(email: string, pwd: string) :  Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword( email, pwd );
      await this.sendVerificationEmail();
      return user; 
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }

  async login(email: string, pwd: string) :  Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword( email, pwd );
      this.updateUserData(user);
      return user; 
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }

  async logout() :  Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }

  private updateUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    };

    return userRef.set(data, {merge: true});
  }
}
