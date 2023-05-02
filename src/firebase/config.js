// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe0BMuJbkQQWlV2sy-Tqzk21yW-9ZynGQ",
  authDomain: "ecommerce-react-6d0be.firebaseapp.com",
  projectId: "ecommerce-react-6d0be",
  storageBucket: "ecommerce-react-6d0be.appspot.com",
  messagingSenderId: "140071890811",
  appId: "1:140071890811:web:8708578ae0f3b8ed5157de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// creamos una funcion que retorne la funcion app
export const initFirebase = () => app