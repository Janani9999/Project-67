import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

  apiKey: "AIzaSyBuDY4_CV02JBbXYw-KrypRkb9NBqbG1JE",
  authDomain: "project-67-70936.firebaseapp.com",
  projectId: "project-67-70936",
  storageBucket: "project-67-70936.appspot.com",
  messagingSenderId: "1075134660624",
  appId: "1:1075134660624:web:bf8ad3f9cf3e54d7f4ca95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();