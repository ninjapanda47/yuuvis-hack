// src/firebase.js
import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBl9G2Qk_mNMad-_w3yrhW7G711zCnkV2s",
    authDomain: "yuuvishack-88e10.firebaseapp.com",
    databaseURL: "https://yuuvishack-88e10.firebaseio.com",
    projectId: "yuuvishack-88e10",
    storageBucket: "gs://yuuvishack-88e10.appspot.com/",
    messagingSenderId: "243245249204",
    appId: "1:243245249204:web:b7f71cc71c865967"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;