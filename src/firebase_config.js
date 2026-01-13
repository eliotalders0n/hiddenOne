// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2PAWBzT8IdMtYR3DYJ1NtyPNI1DgG3Xw",
  authDomain: "famers-admin.firebaseapp.com",
  projectId: "famers-admin",
  storageBucket: "famers-admin.appspot.com",
  messagingSenderId: "636758397610",
  appId: "1:636758397610:web:f4f65fd85890bb18e036d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default firebase;

// use "firebase deploy" when you are done.