// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYcNfgfSV3mAL52Yc5zkMdS31P_5efgNI",
  authDomain: "formanglais-2bc15.firebaseapp.com",
  projectId: "formanglais-2bc15",
  storageBucket: "formanglais-2bc15.appspot.com",
  messagingSenderId: "533101070354",
  appId: "1:533101070354:web:b4097dac5b29a046b830cb",
  measurementId: "G-W7BESQYY98"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app
export { db, auth };