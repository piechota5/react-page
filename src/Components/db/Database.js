import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0Z1eaBQL4cBI29xw6XuqxIjXw11oscOI",
    authDomain: "reactform-9945b.firebaseapp.com",
    databaseURL: "https://reactform-9945b.firebaseio.com",
    projectId: "reactform-9945b",
    storageBucket: "reactform-9945b.appspot.com",
    messagingSenderId: "1010319751392",
    appId: "1:1010319751392:web:12275c9d9bdfaa9f"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;



