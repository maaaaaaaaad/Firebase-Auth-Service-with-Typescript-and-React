import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

type FirebaseDB<T> = {
  apiKey: T;
  authDomain: T;
  databaseURL: T;
  projectId: T;
};

const firebaseConfig: FirebaseDB<string | number | any> = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  // storageBucket: "firebase-auth-with-typescript.appspot.com",
  // messagingSenderId: "21677503446",
  // appId: "1:21677503446:web:8ddea414f36d2438442a77",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDB = firebaseApp.database();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
