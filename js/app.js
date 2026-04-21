import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

import {
    doc,
    setDoc,
    Timestamp
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";


// 🔁 REDIRECCIÓN DESDE INDEX
export function checkAuthIndex() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = "./home.html";
        } else {
            window.location.href = "./auth.html";
        }
    });
}


// 🔒 PROTEGER HOME
export function protectPage() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = "./auth.html";
        }
    });
}


// 🔐 LOGIN
export async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
}


// 📝 REGISTER + CREAR USUARIO EN FIRESTORE
export async function register(email, password) {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 🗄️ crear documento del usuario
    await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: Timestamp.now()
    });

    return userCredential;
}


// 🚪 LOGOUT
export async function logout() {
    return await signOut(auth);
}