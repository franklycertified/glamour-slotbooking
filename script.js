// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA14Bv4-Oac6XIXiQFd6RiF13Ih1yu1C4g",
  authDomain: "glamour-registration1.firebaseapp.com",
  projectId: "glamour-registration1",
  storageBucket: "glamour-registration1.firebasestorage.app",
  messagingSenderId: "180275402752",
  appId: "1:180275402752:web:e17376bfeb7aae9cd4a0e5",
  measurementId: "G-JWZHBH24RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase Connected Successfully");

