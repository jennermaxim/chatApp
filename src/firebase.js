import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD02aFz3eNVaCJTw1_a8cuSMLO1KN3w0KQ",
  authDomain: "chatapp-60b86.firebaseapp.com",
  projectId: "chatapp-60b86",
  storageBucket: "chatapp-60b86.appspot.com",
  messagingSenderId: "27611664726",
  appId: "1:27611664726:web:071770864735b2f601c6f7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
