import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBXv_OLGcFdo8t1gFeym-h2eh9NtMXns88",
  authDomain: "first-2a5fe.firebaseapp.com",
  projectId: "first-2a5fe",
  storageBucket: "first-2a5fe.appspot.com",
  messagingSenderId: "249887658525",
  appId: "1:249887658525:web:80778414aee23e376f2cf4",
  measurementId: "G-1XWEHP1BL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imageDb = getStorage(app);