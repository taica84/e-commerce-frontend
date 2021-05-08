import firebase from "firebase/app"
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB-xu97VJBQmuwrWsCRuQKlePjv-4bZZ2U",
    authDomain: "mern-ecommerce-699fc.firebaseapp.com",
    projectId: "mern-ecommerce-699fc",
    storageBucket: "mern-ecommerce-699fc.appspot.com",
    messagingSenderId: "736468621909",
    appId: "1:736468621909:web:b88c814c54489c4c4752dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();