import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDI2TsimXBHAZydT3Jg9wEDkAn7gLqvh6Q",
  authDomain: "twitter-clone-1c617.firebaseapp.com",
  projectId: "twitter-clone-1c617",
  storageBucket: "twitter-clone-1c617.appspot.com",
  messagingSenderId: "364835368603",
  appId: "1:364835368603:web:e5b1c830b0a90ecf52a03e",
  measurementId: "G-TX9VEGRV4G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export default db;