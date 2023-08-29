// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import  "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCZHaYb487MUKBTpBNE6cjAl6Z2r4gEqU8",
    authDomain: "challenge-2a5ac.firebaseapp.com",
    projectId: "challenge-2a5ac",
    storageBucket: "challenge-2a5ac.appspot.com",
    messagingSenderId: "970087759089",
    appId: "1:970087759089:web:ada7e0783bc439c321bd50",
    measurementId: "G-CEFH56TDPT"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};