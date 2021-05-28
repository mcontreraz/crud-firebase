import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtUTaZP6s5TYHEv9M6OVaVBrTg2Pl7YcI",
  authDomain: "udemy-firebase-3c134.firebaseapp.com",
  projectId: "udemy-firebase-3c134",
  storageBucket: "udemy-firebase-3c134.appspot.com",
  messagingSenderId: "945673753158",
  appId: "1:945673753158:web:e5795579edb03476c3b047",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
