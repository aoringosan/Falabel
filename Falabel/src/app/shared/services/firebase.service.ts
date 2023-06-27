import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  EMAIL = 'k.kondo306@gmail.com'; // <= 自分のメールアドレスに変更してください
  PASSWORD = 'k3k37854' // <= 自分の設定したいパスワードに変更してください

  constructor() {
    const config = {
      apiKey: 'AIzaSyAIvHZtzbQH_nXUJ1boxbxL14IOPuRHo9c',
      authDomain: 'angular-guide-firebase.firebaseapp.com',
      databaseURL: 'https://angular-guide-firebase.firebaseio.com',
      projectId: 'angular-guide-firebase',
      storageBucket: 'angular-guide-firebase.appspot.com',
      messagingSenderId: '582123911754',
    };
    firebase.initializeApp(config);
    this.createUser(this.EMAIL, this.PASSWORD); 
  }

  createUser(email: string, password: string): void { // <= 追加
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential: UserCredential) => {
      console.log(userCredential.operationType);
    });
  }
}
