import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZ5AQPYJQl_pAWc2dwYzM0JycFNfANaXI",
    authDomain: "practica-firebase-20220365.firebaseapp.com",
    projectId: "practica-firebase-20220365",
    storageBucket: "practica-firebase-20220365.appspot.com",
    messagingSenderId: "710917633653",
    appId: "1:710917633653:web:8eea6b252bc5113e856a3c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };