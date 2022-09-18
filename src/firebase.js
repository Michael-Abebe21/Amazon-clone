import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsBH-lqihwtIiG4zf19K6vQ8twmshiOY8",
  authDomain: "challenge-3e4a1.firebaseapp.com",
  projectId: "challenge-3e4a1",
  storageBucket: "challenge-3e4a1.appspot.com",
  messagingSenderId: "773868411413",
  appId: "1:773868411413:web:a9d4a8a536fbce608c0c1c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
