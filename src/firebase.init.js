// DANGER ZONE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPdLvquAO2F322Bm-9i2zxwoc2gVngcww",
  authDomain: "auth-integration-9e4e6.firebaseapp.com",
  projectId: "auth-integration-9e4e6",
  storageBucket: "auth-integration-9e4e6.firebasestorage.app",
  messagingSenderId: "907968405127",
  appId: "1:907968405127:web:bd5bea54abf29c0a716222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

