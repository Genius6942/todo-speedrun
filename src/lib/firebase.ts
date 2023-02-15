import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzzBW-m4XSrdCJanq5mKHKvG275j2RWcQ",
  authDomain: "todo-speedrun-1.firebaseapp.com",
  projectId: "todo-speedrun-1",
  storageBucket: "todo-speedrun-1.appspot.com",
  messagingSenderId: "176855711761",
  appId: "1:176855711761:web:3f84dee82558bf552e71b0",
  measurementId: "G-FXCTX8ZBZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
