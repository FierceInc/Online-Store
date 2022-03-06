import { initializeApp } from "firebase/app";
import {connectAuthEmulator, getAuth} from 'firebase/auth';
import {connectFirestoreEmulator, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = window.location.hostname === "localhost" ? initializeApp({
  apiKey: "demo-key",
  authDomain: "demo-test",
  projectId: "demo-test",
  storageBucket: "default-bucket",
})
: initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
if(window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099")
connectFirestoreEmulator(db, 'localhost', 4005);
}

