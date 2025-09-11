import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDodlkU4DYrFPxNB64MvUdN77-1JpumN4Q",
  authDomain: "ncg-go-ab198.firebaseapp.com",
  projectId: "ncg-go-ab198",
  storageBucket: "ncg-go-ab198.firebasestorage.app",
  messagingSenderId: "875051196644",
  appId: "1:875051196644:web:5306b9646b55ef54a80cf1"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)