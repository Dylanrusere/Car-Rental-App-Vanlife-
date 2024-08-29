// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrTo0XrjqbOQSbl27kzTwU_YSkF9bK5Vo",
  authDomain: "react-auth-dylan.firebaseapp.com",
  projectId: "react-auth-dylan",
  storageBucket: "react-auth-dylan.appspot.com",
  messagingSenderId: "697330899889",
  appId: "1:697330899889:web:1756b603e16ce5eaa5bb90",
  measurementId: "G-4GYV9HCHV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);