// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgdRrzKsfjeL1DQ0yPjY4lV0RsoKr0FZ4",
  authDomain: "appvote-e925f.firebaseapp.com",
  databaseURL: "https://appvote-e925f-default-rtdb.firebaseio.com",
  projectId: "appvote-e925f",
  storageBucket: "appvote-e925f.appspot.com",
  messagingSenderId: "1086384860726",
  appId: "1:1086384860726:web:bae74133cf1979f7333297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app)