// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-1umJxCB0NMhq1rN1KkUJvvgPvyEU8Mc",
  authDomain: "movie-zone-85ba3.firebaseapp.com",
  projectId: "movie-zone-85ba3",
  storageBucket: "movie-zone-85ba3.appspot.com",
  messagingSenderId: "294461672714",
  appId: "1:294461672714:web:cab8718ab6a2a3f8e3bef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};