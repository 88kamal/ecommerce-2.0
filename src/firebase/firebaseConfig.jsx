import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhLjKPlySs1lfD_ZxLTnR7Mzi1LqvbwIk",
  authDomain: "clientecommerce-768a4.firebaseapp.com",
  projectId: "clientecommerce-768a4",
  storageBucket: "clientecommerce-768a4.appspot.com",
  messagingSenderId: "207581867268",
  appId: "1:207581867268:web:b45c9acaac9bd9abf6f451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;