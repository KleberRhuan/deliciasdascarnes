// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiMFH-Q-iKejygaWqlFFuTlFGvjj8WjJo",
    authDomain: "deliciasdascarnes-5f44f.firebaseapp.com",
    projectId: "deliciasdascarnes-5f44f",
    storageBucket: "deliciasdascarnes-5f44f.appspot.com",
    messagingSenderId: "744805702717",
    appId: "1:744805702717:web:afe501d96da531d2391e54",
    measurementId: "G-1S95HKBNLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
