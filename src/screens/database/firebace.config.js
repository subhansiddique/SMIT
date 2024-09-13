import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUlPY3luns2EankiMCTqlYxeX0rVh0oFk",
    authDomain: "chat-app-1be02.firebaseapp.com",
    projectId: "chat-app-1be02",
    storageBucket: "chat-app-1be02.appspot.com",
    messagingSenderId: "129332163267",
    appId: "1:129332163267:web:a88d706a7b7d3772dde876",
    measurementId: "G-90GQJN11K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
