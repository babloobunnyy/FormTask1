// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCThZqS7uZ_CipiZD9r88G5VGl-LnDQGsY",
  authDomain: "task1-a9e7d.firebaseapp.com",
  projectId: "task1-a9e7d",
  storageBucket: "task1-a9e7d.appspot.com",
  messagingSenderId: "31447059049",
  appId: "1:31447059049:web:0c3db89bb8160331b6f0f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore= getFirestore(app);



