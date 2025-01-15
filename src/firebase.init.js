// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDm8FwdFzUQpPrfUi5sF9BxOiLw2NcxmJg",
  authDomain: "rebase-concept-1.firebaseapp.com",
  projectId: "rebase-concept-1",
  storageBucket: "rebase-concept-1.firebasestorage.app",
  messagingSenderId: "447052342842",
  appId: "1:447052342842:web:b36b1fa1f3ab5b66dcf703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
