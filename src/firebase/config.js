// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEd9c-F5jgcw0OL4yG_d1Ht1PRzK7ZGeY",
  authDomain: "rj19760-ecommerce-coderhouse.firebaseapp.com",
  projectId: "rj19760-ecommerce-coderhouse",
  storageBucket: "rj19760-ecommerce-coderhouse.appspot.com",
  messagingSenderId: "763359211428",
  appId: "1:763359211428:web:f871defadf0f7b5f875b31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)