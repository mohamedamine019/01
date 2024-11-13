// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaXGpuWNMljzpWTLGvpd1WleKge2IBcX8",
    authDomain: "varphi-club-app.firebaseapp.com",
    databaseURL: "https://varphi-club-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "varphi-club-app",
    messagingSenderId: "801280688843",
    appId: "1:801280688843:web:f305ca1178a20400c9114e"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
