import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWaO9wYIjb8UDZyc6m6VSYCVulWcJdahE",
  authDomain: "react-project-d21b1.firebaseapp.com",
  projectId: "react-project-d21b1",
  storageBucket: "react-project-d21b1.appspot.com",
  messagingSenderId: "953067814228",
  appId: "1:953067814228:web:eac99b9948623ed5951cc1",
  measurementId: "G-ZLFZMLWPP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);