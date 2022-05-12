import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPf5BYqMWxTno2gtlLYhCxe6aZso9XURk",
  authDomain: "finallhackaton.firebaseapp.com",
  projectId: "finallhackaton",
  storageBucket: "finallhackaton.appspot.com",
  messagingSenderId: "686319091273",
  appId: "1:686319091273:web:2e45724f5cde4b65c18998",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
