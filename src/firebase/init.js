// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7LGNfAXwwgcwn8EpxB7MAxbbEkYMlyp0",
  authDomain: "fury-of-elements-6f135.firebaseapp.com",
  projectId: "fury-of-elements-6f135",
  storageBucket: "fury-of-elements-6f135.appspot.com",
  messagingSenderId: "1005811220610",
  appId: "1:1005811220610:web:81fb606014ad28fffdf49b"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const db = getFirestore();
export default db