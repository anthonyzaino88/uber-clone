// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt6XM30VGpt9Bcyw45_87WZZP-7Hxm1gw",
  authDomain: "uber-clone-1-4f66a.firebaseapp.com",
  projectId: "uber-clone-1-4f66a",
  storageBucket: "uber-clone-1-4f66a.appspot.com",
  messagingSenderId: "969976022926",
  appId: "1:969976022926:web:bcd0ddb18be56b822846df",
  measurementId: "G-P5T0LZYM7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
