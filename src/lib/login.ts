import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";

import { auth, db } from "./firebase";
const provider = new GoogleAuthProvider();
const usersRef = collection(db, "users");
export const signInWithGoogle = async () => {
  const res = await signInWithPopup(auth, provider);
  const user = res.user;
  const userRef = query(usersRef, where("uid", "==", user.uid));
  let userData = await getDocs(userRef);
  if (userData.empty) {
    await addDoc(usersRef, {
      name: user.displayName,
      authProvider: "google",
      email: user.email,
      todos: [],
      uid: user.uid
    });

    userData = await getDocs(userRef);
  }

  return userData.docs[0].data();
};
