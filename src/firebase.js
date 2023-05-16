import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3iHGBeFjAea7hcLpbrNkwUzD5bOVO_hs",
  authDomain: "chat-70551.firebaseapp.com",
  projectId: "chat-70551",
  storageBucket: "chat-70551.appspot.com",
  messagingSenderId: "861278006292",
  appId: "1:861278006292:web:76af645578bc2f66e8cb01",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
