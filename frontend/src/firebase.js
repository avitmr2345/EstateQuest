import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatequest-b27f3.firebaseapp.com",
  projectId: "estatequest-b27f3",
  storageBucket: "estatequest-b27f3.appspot.com",
  messagingSenderId: "764124688696",
  appId: "1:764124688696:web:2a910b441b005896e5d1cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
