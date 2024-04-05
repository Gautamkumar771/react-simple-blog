// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0AZD_EkDohetksVJTYoW4XW9g5ZW82rw",
    authDomain: "blogging-app-8a963.firebaseapp.com",
    projectId: "blogging-app-8a963",
    storageBucket: "blogging-app-8a963.appspot.com",
    messagingSenderId: "515897750120",
    appId: "1:515897750120:web:2559d72247a3982a00c1dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);