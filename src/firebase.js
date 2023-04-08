// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt0wtLPMY4vu0HoQH__J4-8kOnpeuZXts",
  authDomain: "auth-react-ac.firebaseapp.com",
  projectId: "auth-react-ac",
  storageBucket: "auth-react-ac.appspot.com",
  messagingSenderId: "1000824014056",
  appId: "1:1000824014056:web:d4f44c7996d869f6bab55d",
  measurementId: "G-PDYP24T49E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);