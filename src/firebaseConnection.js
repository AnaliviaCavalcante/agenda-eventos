import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "projeto-maromo.firebaseapp.com",
  projectId: "projeto-maromo",
  storageBucket: "projeto-maromo.firebasestorage.app",
  messagingSenderId: "987319431188",
  appId: "1:987319431188:web:9e7876d12fba395c2fb701",
  measurementId: "G-YVG32RZ0HC"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };
