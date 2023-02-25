import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgmVX8uJda3wzbDYqB_OH4IDqTbyQ9EZg",
  authDomain: "clone-74ccd.firebaseapp.com",
  projectId: "clone-74ccd",
  storageBucket: "clone-74ccd.appspot.com",
  messagingSenderId: "892126139971",
  appId: "1:892126139971:web:54acbbb9a860aa0480e6f6",
  measurementId: "G-JJF0T8YS25"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export {auth, db};