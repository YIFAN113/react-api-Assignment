import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8E4Wah6nGOLtr3vW1_53t5fhov62pXj0",
    authDomain: "web-react-assignment1.firebaseapp.com",
    projectId: "web-react-assignment1",
    storageBucket: "web-react-assignment1.appspot.com",
    messagingSenderId: "361986090383",
    appId: "1:361986090383:web:aa5314129cb90298b157fa",
    measurementId: "G-2JFZ24BCZE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);