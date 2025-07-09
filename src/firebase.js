// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-XomHuRWPDcQgpTqMl4HlFHSpBc2MFTs",
  authDomain: "websitelogin-8fc0a.firebaseapp.com",
  projectId: "websitelogin-8fc0a",
  storageBucket: "websitelogin-8fc0a.firebasestorage.app",
  messagingSenderId: "476462880492",
  appId: "1:476462880492:web:274a6a6f035a2149b937c9",
  measurementId: "G-1G361M81YL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
