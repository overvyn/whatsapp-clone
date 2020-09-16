import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBgvA2P4PjORffjCXQB5x7RGTq2q-a50Vs",
    authDomain: "overvyn-whatsapp-clone.firebaseapp.com",
    databaseURL: "https://overvyn-whatsapp-clone.firebaseio.com",
    projectId: "overvyn-whatsapp-clone",
    storageBucket: "overvyn-whatsapp-clone.appspot.com",
    messagingSenderId: "1089139490228",
    appId: "1:1089139490228:web:76bc85aae5f6d3896ec6e1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider};
  export default db;
  

