import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyAMDV4Prlx6NTbcvMPw6yWv8ASh5RCWQus",
    authDomain: "letmeask-4f52d.firebaseapp.com",
    databaseURL: "https://letmeask-4f52d-default-rtdb.firebaseio.com",
    projectId: "letmeask-4f52d",
    storageBucket: "letmeask-4f52d.appspot.com",
    messagingSenderId: "311432126533",
    appId: "1:311432126533:web:3d1ad639b8151a3f9ec32c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
