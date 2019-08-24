import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAGoxC4QqveaXpRDaNCMT4FexzmH79jLO4",
  authDomain: "yuuvis-6d17c.firebaseapp.com",
  databaseURL: "https://yuuvis-6d17c.firebaseio.com",
  projectId: "yuuvis-6d17c",
  storageBucket: "yuuvis",
  messagingSenderId: "621651596853",
  appId: "1:621651596853:web:49a27e4e808ca600"
};

firebase.initializeApp(firebaseConfig);

export default firebase