import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCtY0LEnNXFh9IFvqpoZBLqkMHySuOPwvw",
    authDomain: "coiff-637ed.firebaseapp.com",
    projectId: "coiff-637ed",
    storageBucket: "coiff-637ed.appspot.com",
    messagingSenderId: "682718752028",
    appId: "1:682718752028:web:80d9c72e56aa1845831ed9",
    measurementId: "G-G3E1Z0LDCS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}
