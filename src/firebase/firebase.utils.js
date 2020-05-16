import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAuQG4U2rcFh-ebTfIomoLpcfn2uC8ytq4",
    authDomain: "crown-db-9d506.firebaseapp.com",
    databaseURL: "https://crown-db-9d506.firebaseio.com",
    projectId: "crown-db-9d506",
    storageBucket: "crown-db-9d506.appspot.com",
    messagingSenderId: "182847793709",
    appId: "1:182847793709:web:adeff7689dd652cdac66a4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

