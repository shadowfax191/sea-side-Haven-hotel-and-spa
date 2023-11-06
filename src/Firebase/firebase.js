// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-QswHkY5r0KD8t-80N4K5Rd0fzeucFg4",
  authDomain: "sea-side-haven.firebaseapp.com",
  projectId: "sea-side-haven",
  storageBucket: "sea-side-haven.appspot.com",
  messagingSenderId: "419565343460",
  appId: "1:419565343460:web:91bdf893dcc2d7981112f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth