// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARtTGBQaz8hhtab6x57ihoxeCBbLh0_w4",
  authDomain: "pukutamwanza.firebaseapp.com",
  projectId: "pukutamwanza",
  storageBucket: "pukutamwanza.firebasestorage.app",
  messagingSenderId: "812558327380",
  appId: "1:812558327380:web:965cfb6353b4c4cb5f57c1",
  measurementId: "G-9K7C1FZK4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;