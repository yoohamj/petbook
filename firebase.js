// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEKwIuRWq2EQeRVhesFiP00snm_lxm7zA",
  authDomain: "yooham-4895a.firebaseapp.com",
  projectId: "yooham-4895a",
  storageBucket: "yooham-4895a.appspot.com",
  messagingSenderId: "887316209215",
  appId: "1:887316209215:web:dd04e173c8db6b68c7e28a",
  measurementId: "G-WNJBPNQ10B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage();

export {app, db, storage}