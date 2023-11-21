
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "motosshop-f99aa.firebaseapp.com",
  projectId: "motosshop-f99aa",
  storageBucket: "motosshop-f99aa.appspot.com",
  messagingSenderId: "327073253183",
  appId: "1:327073253183:web:0b90c5ec7d105bc48d758a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);