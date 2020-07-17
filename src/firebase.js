// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkPf5c1kidSYiTy8DGreYhSIYMwGbaJiM",
  authDomain: "brennenwebresume.firebaseapp.com",
  databaseURL: "https://brennenwebresume.firebaseio.com",
  projectId: "brennenwebresume",
  storageBucket: "brennenwebresume.appspot.com",
  messagingSenderId: "829437240848",
  appId: "1:829437240848:web:af01fd0b7395002ee50c95",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
