
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkryzYgNXQutwZyL0EapdUQYuFhsHFpfo",
    authDomain: "ema-john-with-auth-28548.firebaseapp.com",
    projectId: "ema-john-with-auth-28548",
    storageBucket: "ema-john-with-auth-28548.appspot.com",
    messagingSenderId: "572798133114",
    appId: "1:572798133114:web:1a86b5ca254082aa76ecc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;