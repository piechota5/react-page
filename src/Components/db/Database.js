import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwJpz2Z0j89XO0-8u1q1mvEDYcP15pz7A",
    authDomain: "tpiehchowicz.firebaseapp.com",
    databaseURL: "https://tpiehchowicz.firebaseio.com",
    projectId: "tpiehchowicz",
    storageBucket: "tpiehchowicz.appspot.com",
    messagingSenderId: "485574794249",
    appId: "1:485574794249:web:6125982bdfea11de"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;



