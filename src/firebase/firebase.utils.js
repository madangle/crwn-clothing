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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        //create a new entry on the db
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                ...additionalData
            })
        }
        catch(e){
            console.log("error creating user", e.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

