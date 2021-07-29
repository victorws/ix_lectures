import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIF4O2zPFVVAo93OTHa1iBY8Wef-OV90c",
  authDomain: "taks-list.firebaseapp.com",
  projectId: "taks-list",
  storageBucket: "taks-list.appspot.com",
  messagingSenderId: "656339406492",
  appId: "1:656339406492:web:d91d3f0a32918ea9ea2759",
  measurementId: "G-KWRFK8NVNP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;