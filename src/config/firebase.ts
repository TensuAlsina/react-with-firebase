// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK6T4VuIh-3JhPAOky_NiQdgjHM252ZvA",
  authDomain: "my-react-app-16fed.firebaseapp.com",
  projectId: "my-react-app-16fed",
  storageBucket: "my-react-app-16fed.appspot.com",
  messagingSenderId: "583974919621",
  appId: "1:583974919621:web:1479df3ad4b3a9f907ffac",
  measurementId: "G-XWVXM7S92Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const db = getFirestore(app)
 