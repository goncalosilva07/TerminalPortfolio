// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx16ph2YmDkPTE9hZUKF2ieCezXpE_v08",
  authDomain: "terminalportfolio-61b7a.firebaseapp.com",
  databaseURL: "https://terminalportfolio-61b7a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "terminalportfolio-61b7a",
  storageBucket: "terminalportfolio-61b7a.firebasestorage.app",
  messagingSenderId: "499878372543",
  appId: "1:499878372543:web:aabbec61ccf320f6b7520a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtendo a instância do banco de dados
const db = getDatabase(app);

const auth = getAuth(app);

// Exportando as funções para uso no seu código principal
export { db, ref, push, set, get, auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
