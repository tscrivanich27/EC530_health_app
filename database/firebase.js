import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBtkNKOiM7HA1-PxJABEZxJuCNTgzgRmCI",
  authDomain: "healthnow-a27e9.firebaseapp.com",
  projectId: "healthnow-a27e9",
  storageBucket: "healthnow-a27e9.appspot.com",
  messagingSenderId: "800747354539",
  appId: "1:800747354539:web:d81df0056fd9c8e6063aee"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth