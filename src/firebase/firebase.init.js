// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjLxGjxISJ-8bWAR5t7uIFU7aw-yZ0a6M",
  authDomain: "gadget-zone-bbd3c.firebaseapp.com",
  projectId: "gadget-zone-bbd3c",
  storageBucket: "gadget-zone-bbd3c.firebasestorage.app",
  messagingSenderId: "920994174716",
  appId: "1:920994174716:web:dcddca36f3cb82f3456979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);