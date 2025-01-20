// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChSWp1RrTlZC39Sq_DAeCcm_0JQCQ8d3k",
  authDomain: "datas-b03e6.firebaseapp.com",
  databaseURL: "https://datas-b03e6-default-rtdb.firebaseio.com",
  projectId: "datas-b03e6",
  storageBucket: "datas-b03e6.firebasestorage.app",
  messagingSenderId: "886911737700",
  appId: "1:886911737700:web:adfaee7c174bb327a5e471",
  measurementId: "G-TG9QK2Q912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db}