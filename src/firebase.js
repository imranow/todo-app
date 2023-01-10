
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_TODO_API_KEY,
  authDomain: process.env.REACT_TODO_AUTH_DOMAIN,
  projectId: process.env.REACT_TODO_PROJECT_ID,
  storageBucket: process.env.REACT_TODO_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_TODO_MESSAGING_SEND_ID,
  appId: process.env.REACT_TODO_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);