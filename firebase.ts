import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAGiwe80NYwhzQN8Y7mLJ1ycRSlk0J-0HA",
  authDomain: "ncg-go-95322.firebaseapp.com",
  projectId: "ncg-go-95322",
  storageBucket: "ncg-go-95322.firebasestorage.app",
  messagingSenderId: "483660709144",
  appId: "1:483660709144:web:2077cb59659901f315f26d",
  measurementId: "G-9LRFJGD4XW"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);
