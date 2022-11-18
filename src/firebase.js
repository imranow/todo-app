
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt45VBE4bGGG8HIgo-gskO9yh_LrijHyA",
  authDomain: "todo-app-c1eee.firebaseapp.com",
  projectId: "todo-app-c1eee",
  storageBucket: "todo-app-c1eee.appspot.com",
  messagingSenderId: "215806710336",
  appId: "1:215806710336:web:814822b8af15dd21c405a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);