// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (replace with your Firebase config details)
const firebaseConfig = {
    apiKey: "AIzaSyBcreplT0hJ_Q3PWOApmDTxV7v4B5A37W8",
    authDomain: "focalpointweb-33f93.firebaseapp.com",
    projectId: "focalpointweb-33f93",
    storageBucket: "focalpointweb-33f93.appspot.com",
    messagingSenderId: "952456116476",
    appId: "1:952456116476:web:56cc6aa28ebff9c8f3ff79",
    measurementId: "G-G7H0X9XTQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
