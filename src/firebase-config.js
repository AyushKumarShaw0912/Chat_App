import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAgRxkZyA1s1Oms0qhqQ9dCKniJjpBss3c",
  authDomain: "chatapp-893a9.firebaseapp.com",
  projectId: "chatapp-893a9",
  storageBucket: "chatapp-893a9.appspot.com",
  messagingSenderId: "951582660803",
  appId: "1:951582660803:web:4c44b8cc4436d30f862a76",
  measurementId: "G-MK22KBV1E4"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const provider= new GoogleAuthProvider()
export const db=getFirestore(app)