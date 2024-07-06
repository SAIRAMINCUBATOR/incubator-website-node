import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "9b11ac04d463937c6d22460e7f7cd812ca38d252",
  authDomain: "sairam-incubation-website.firebaseapp.com",
  projectId: "sairam-incubation-website",
  storageBucket: "sairam-incubation-website.appspot.com",
  messagingSenderId: "60031340503",
  appId: "1:60031340503:web:02360684ea916242b2c592",
  measurementId: "G-6KYGWC44V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imageDb = getStorage(app);
