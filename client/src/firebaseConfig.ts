// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASoJiAksvQEYqZBZHl9Hwp7g9na4eZkBk",
  authDomain: "web-dev-stories.firebaseapp.com",
  projectId: "web-dev-stories",
  storageBucket: "web-dev-stories.appspot.com",
  messagingSenderId: "182514297921",
  appId: "1:182514297921:web:2eeff8a31f6646ec436ac0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
