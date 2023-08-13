// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_uf7FuAvOS7WIw1qUESLd0Ton-3_cmkQ",
    authDomain: "video-ade2f.firebaseapp.com",
    projectId: "video-ade2f",
    storageBucket: "video-ade2f.appspot.com",
    messagingSenderId: "253944317665",
    appId: "1:253944317665:web:f452b0d9fcc8edc44719a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;