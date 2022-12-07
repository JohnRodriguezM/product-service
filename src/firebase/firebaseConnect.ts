import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC45jxkxnMWeUH_pFc4KMnPpHR1SFedErc",
  authDomain: "arepas-82306.firebaseapp.com",
  projectId: "arepas-82306",
  storageBucket: "arepas-82306.appspot.com",
  messagingSenderId: "319638635914",
  appId: "1:319638635914:web:451b2a543bb274636c7473",
  measurementId: "G-Y7P27687YY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


