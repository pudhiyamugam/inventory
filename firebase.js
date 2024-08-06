// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALYqk5QcfqahooadU6zSwe4P76iyrLJ-U",
  authDomain: "inventory-management-app-fd68b.firebaseapp.com",
  projectId: "inventory-management-app-fd68b",
  storageBucket: "inventory-management-app-fd68b.appspot.com",
  messagingSenderId: "640660726072",
  appId: "1:640660726072:web:bdf44e027528607d44a1cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app);

export{firestore};