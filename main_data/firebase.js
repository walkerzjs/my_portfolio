// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1o47TFokJX6p1JimuA1EWq3GpB4n5jbk",
  authDomain: "my-portfolio-b1ad0.firebaseapp.com",
  databaseURL: "https://my-portfolio-b1ad0.firebaseio.com",
  projectId: "my-portfolio-b1ad0",
  storageBucket: "my-portfolio-b1ad0.firebasestorage.app",
  messagingSenderId: "342211610657",
  appId: "1:342211610657:web:62f1a95b5a900138e3fb60",
  measurementId: "G-MGX4FTPKG2"
};

const app = initializeApp(firebaseConfig);

export { app };