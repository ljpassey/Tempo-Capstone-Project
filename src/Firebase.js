import firebase, { initializeApp } from "firebase/app";
import { getAuth, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBOcTqPZbOTswhPZ6zbx3MYB0WfokEauQk",
  authDomain: "spec-capstone.firebaseapp.com",
  projectId: "spec-capstone",
  storageBucket: "spec-capstone.appspot.com",
  messagingSenderId: "978661069903",
  appId: "1:978661069903:web:6d8b96148b2940a627463a",
  measurementId: "G-CTFP7Z2MMX",
};

const app = initializeApp(config);

export const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export const logout = signOut(auth);

 export const db = getFirestore(app)

export default getFirestore(app);
