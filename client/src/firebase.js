// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tastybites-blog.firebaseapp.com",
  projectId: "tastybites-blog",
  storageBucket: "tastybites-blog.appspot.com",
  messagingSenderId: "408320247756",
  appId: "1:408320247756:web:14b5d96e17da912d2fbf69",
  measurementId: "G-1SZ0DB1QCC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
