import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDwfla5spHR1wdDWSk-nN-mCpD7n1S_E50",
  authDomain: "react-neflix-clone-a2603.firebaseapp.com",
  projectId: "react-neflix-clone-a2603",
  storageBucket: "react-neflix-clone-a2603.appspot.com",
  messagingSenderId: "794785091009",
  appId: "1:794785091009:web:aec7b181cb253b234fb340",
  measurementId: "G-6KVS6JPTQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);