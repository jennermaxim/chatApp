import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvG7h6o0_mTEBlCKkdBN8-r53uAMgcuCM",
  authDomain: "chat-aa314.firebaseapp.com",
  projectId: "chat-aa314",
  storageBucket: "chat-aa314.appspot.com",
  messagingSenderId: "397913721714",
  appId: "1:397913721714:web:dec7c768d1ac5b6abc6beb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
