import firebase from 'firebase/compat';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDfhIMRpRSraQWH3XHardxg-D36G03Uuuc",
  authDomain: "chatify-d2d15.firebaseapp.com",
  projectId: "chatify-d2d15",
  storageBucket: "chatify-d2d15.appspot.com",
  messagingSenderId: "831482439275",
  appId: "1:831482439275:web:7589e6666866d31ef8332e"
};

// const app = initializeApp(firebaseConfig);

if(!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}