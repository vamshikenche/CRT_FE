import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })

export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => user ? this.afs.doc<User>('users/${user.uid}').valueChanges() : of(null))
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this. router.navigate(['/']);
  }

  private updateUserData (user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc('users/${user.uid}');
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }
    // "set" function is destructive and can replace "null" to User on Log Out.
    // To avoid that, "merge" is set to true
    return userRef.set(data, { merge: true });
  }
}
