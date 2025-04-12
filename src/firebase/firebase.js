// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANJTBJky8hXrwLQtCWcosCJgOMLLgaFCM",
  authDomain: "e-learning-78f6d.firebaseapp.com",
  projectId: "e-learning-78f6d",
  storageBucket: "e-learning-78f6d.firebasestorage.app",
  messagingSenderId: "86240420099",
  appId: "1:86240420099:web:1c5106d53b66a222e68936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);