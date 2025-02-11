// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7W4VPzF0c7uVS6tpo2MJ0VGg3xaRqhl0",
  authDomain: "dragon-news-121c2.firebaseapp.com",
  projectId: "dragon-news-121c2",
  storageBucket: "dragon-news-121c2.firebasestorage.app",
  messagingSenderId: "580006909679",
  appId: "1:580006909679:web:7a2e110d38d2008d58ad1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);