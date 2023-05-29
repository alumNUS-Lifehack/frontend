import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXdBllcK1cELpyAVtzfXPA8kS294KsGP4",
    authDomain: "alumnus-4ba64.firebaseapp.com",
    projectId: "alumnus-4ba64",
    storageBucket: "alumnus-4ba64.appspot.com",
    messagingSenderId: "1030908140750",
    appId: "1:1030908140750:web:76bace41a8bd6230e0049f",
    measurementId: "G-E9CW4YQDXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
