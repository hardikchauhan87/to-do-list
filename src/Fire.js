import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyDzIzAHpYNlYBeKwThq5PDyWF-c9HEjf4o",
  authDomain: "site-63866.firebaseapp.com",
  databaseURL: "https://site-63866-default-rtdb.firebaseio.com",
  projectId: "site-63866",
  storageBucket: "site-63866.appspot.com",
  messagingSenderId: "339077135712",
  appId: "1:339077135712:web:6967c77640172e61e03205",
  measurementId: "G-8QDNZV31RJ"
  };
const fire=firebase.initializeApp(firebaseConfig);
export default fire.database().ref()