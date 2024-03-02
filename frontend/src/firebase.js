import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJtI9KZ929fzWWpHWx4HYceMG_NiNJqB8",
  authDomain: "foodtruckfinder-289bc.firebaseapp.com",
  projectId: "foodtruckfinder-289bc",
  storageBucket: "foodtruckfinder-289bc.appspot.com",
  messagingSenderId: "154346768746",
  appId: "1:154346768746:web:809294c0cdf6eb87ccbd13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
