// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW9nnnPzbcUVF7a7D_VLwMoMvo71FryiI",
  authDomain: "jayabuana-cc7d9.firebaseapp.com",
  databaseURL: "https://jayabuana-cc7d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jayabuana-cc7d9",
  storageBucket: "jayabuana-cc7d9.appspot.com",
  messagingSenderId: "219975896737",
  appId: "1:219975896737:web:86581b10fdd79ba3972ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app)