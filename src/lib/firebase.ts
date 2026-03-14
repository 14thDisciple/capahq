import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzOxO1odyP0QYNKPHqiIkFdX7vvIysDRM",
  authDomain: "capa-website-826f3.firebaseapp.com",
  projectId: "capa-website-826f3",
  storageBucket: "capa-website-826f3.firebasestorage.app",
  messagingSenderId: "80720959015",
  appId: "1:80720959015:web:e886bda870b1dfa6652002"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
