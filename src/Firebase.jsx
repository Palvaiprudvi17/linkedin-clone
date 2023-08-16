// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXbTSiOzSQ8UKMtMoqbmjssyjwoScHh7s",
  authDomain: "discord-clone-1e8ce.firebaseapp.com",
  projectId: "discord-clone-1e8ce",
  storageBucket: "discord-clone-1e8ce.appspot.com",
  messagingSenderId: "1013246802397",
  appId: "1:1013246802397:web:a95a981661313dbda19e34",
  measurementId: "G-Y6RFWBJYRM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleprovider=new GoogleAuthProvider();
export const database= getFirestore(app)


export const storage=getStorage(app)



