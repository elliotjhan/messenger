import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCG_qn59jWwi6FAi6uLpom27CGywk4gyUA",
  authDomain: "messenger-cba5c.firebaseapp.com",
  projectId: "messenger-cba5c",
  storageBucket: "messenger-cba5c.appspot.com",
  messagingSenderId: "3605037901",
  appId: "1:3605037901:web:78925e18de318680246d04",
  measurementId: "G-7WY0Q54HEB",
};

const app = !firebaseConfig.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
