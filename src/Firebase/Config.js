import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyB-as6JQ-nkhzYK9e2yTBI4kVi71_Q8yhk",
     authDomain: "contect-form-8eea3.firebaseapp.com",
     projectId: "contect-form-8eea3",
     storageBucket: "contect-form-8eea3.appspot.com",
     messagingSenderId: "472874403738",
     appId: "1:472874403738:web:b3b170adcf1fd78a7bdc23",
     measurementId: "G-HMTNJH14D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage }