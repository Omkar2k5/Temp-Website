// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzePLdBowfHuhgIBVCQpho0HGZZJv5AhI",
  authDomain: "gadi-lohar-samaj.firebaseapp.com",
  projectId: "gadi-lohar-samaj",
  storageBucket: "gadi-lohar-samaj.firebasestorage.app",
  messagingSenderId: "170491998124",
  appId: "1:170491998124:web:25f703b38dc5603c675409",
  measurementId: "G-WWMB7WR044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
