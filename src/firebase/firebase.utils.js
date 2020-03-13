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

const userExists = async (userRef) => {
    const snapshot = await userRef.get();
    return snapshot.exists;
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (userAuth) {
        const userRef = firestore.doc(`/users/${userAuth.uid}`);
        const isUserExists = await userExists(userRef);
        if (!isUserExists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
            } catch (e) {
                console.log(e, 'errorrrrrrr');
            }
        }


        return userRef;
    }
};

export const convertCollectionsSnapshotToMap = (collections) => {
    let collectionObj = {};
    collections.docs.forEach(doc => {
        const {title, items} = doc.data();
        collectionObj[title.toLowerCase()] = {
            routeName: encodeURI(title.toLowerCase()),
            id       : doc.id,
            title,
            items
        };
    });
    return collectionObj;

};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;