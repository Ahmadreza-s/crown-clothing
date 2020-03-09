import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey           : 'AIzaSyCvvg84BQIdEzDYdrdpXqoRwyInVc0LJGc',
    authDomain       : 'crown-clothing-62527.firebaseapp.com',
    databaseURL      : 'https://crown-clothing-62527.firebaseio.com',
    projectId        : 'crown-clothing-62527',
    storageBucket    : 'crown-clothing-62527.appspot.com',
    messagingSenderId: '293526173102',
    appId            : '1:293526173102:web:1384ca7baa4fea9010c43f'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;