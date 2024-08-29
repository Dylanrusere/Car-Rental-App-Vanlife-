// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD9z9oFE4sWZhlGj-S4wiSTIAhptlH6Y3E",
    authDomain: "react-auth-new-dylaneight.firebaseapp.com",
    projectId: "react-auth-new-dylaneight",
    storageBucket: "react-auth-new-dylaneight.appspot.com",
    messagingSenderId: "552655881746",
    appId: "1:552655881746:web:6a2d7887f183b978383acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const db=getFirestore(app);

export { auth };
