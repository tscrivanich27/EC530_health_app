// Imports for firebase.js
import { initializeApp } from 'firebase/app'

//Initialize firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtkNKOiM7HA1-PxJABEZxJuCNTgzgRmCI",
  authDomain: "healthnow-a27e9.firebaseapp.com",
  projectId: "healthnow-a27e9",
  storageBucket: "healthnow-a27e9.appspot.com",
  messagingSenderId: "800747354539",
  appId: "1:800747354539:web:d81df0056fd9c8e6063aee"
}

//Initialize app with provided firebase configuration
const app = initializeApp(firebaseConfig)

export default app