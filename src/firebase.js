// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv8kUjSnzn2CIPDwH9trKCvvsJq6adboc",
  authDomain: "clone-8eaa1.firebaseapp.com",
  projectId: "clone-8eaa1",
  storageBucket: "clone-8eaa1.appspot.com",
  messagingSenderId: "146195952114",
  appId: "1:146195952114:web:7baf5fddebb2c6f28c7b6b",
  measurementId: "G-FLT0CN11MK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
