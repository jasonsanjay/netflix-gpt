
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpyw4On7d_e_dZWMI3mp2gQMFlggxyztg",
  authDomain: "sanjay-gpt-movie.firebaseapp.com",
  projectId: "sanjay-gpt-movie",
  storageBucket: "sanjay-gpt-movie.firebasestorage.app",
  messagingSenderId: "913927433934",
  appId: "1:913927433934:web:0098291ba5c8b31d17ea9f",
  measurementId: "G-MHYPLREXL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
