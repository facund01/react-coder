// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNXPSTmmAxemnqutwjCoMmXKDyn3NXKOo",
    authDomain: "react-coder-2009c.firebaseapp.com",
    projectId: "react-coder-2009c",
    storageBucket: "react-coder-2009c.appspot.com",
    messagingSenderId: "1070337027581",
    appId: "1:1070337027581:web:2572e56a9991fb4c627d94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;