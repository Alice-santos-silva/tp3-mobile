import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCm-lbbOSQWx5WsaEUlRlxCXnw9pZcYBog",
  authDomain: "projeto4-f35e8.firebaseapp.com",
  projectId: "projeto4-f35e8",
  storageBucket: "projeto4-f35e8.appspot.com",
  messagingSenderId: "251229101400",
  appId: "1:251229101400:web:bb84fe963288e08508192d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app)
export const storage = getStorage(app)