import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGMwJB9NG4FfETCgLTJXkpbcLqWdFMxoE",
  authDomain: "slack-clone-9742c.firebaseapp.com",
  projectId: "slack-clone-9742c",
  storageBucket: "slack-clone-9742c.appspot.com",
  messagingSenderId: "896730783775",
  appId: "1:896730783775:web:7f8912f142ccd0a39e352a",
  measurementId: "G-SERCS3T5HJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db};
