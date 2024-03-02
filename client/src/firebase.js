// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { config } from 'dotenv'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

     // apiKey: "AIzaSyCpGibWZMNNC3Qm_rWfUZETt0XBUGdTmzA",

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "empire-state-84bbe.firebaseapp.com",
  projectId: "empire-state-84bbe",
  storageBucket: "empire-state-84bbe.appspot.com",
  messagingSenderId: "889916667302",
  appId: "1:889916667302:web:a37704fae36a13424bcb67",
  measurementId: "G-6JKV3LFLCE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const auth = getAuth(app);