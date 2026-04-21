import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA2ahrOstthfTQEk8QPjhswqJXIewLHbck",
    authDomain: "gabit-focus-habits.firebaseapp.com",
    projectId: "gabit-focus-habits",
    storageBucket: "gabit-focus-habits.firebasestorage.app",
    messagingSenderId: "634718539602",
    appId: "1:634718539602:web:315b33abb71e724486348b",
    measurementId: "G-HSTX6ZTSYG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);