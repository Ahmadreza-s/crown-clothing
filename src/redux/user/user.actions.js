import * as actionTypes from './user.types';
import {auth, createUserProfileDocument, getCurrentUser, googleProvider} from '../../firebase/firebase.utils';

const signInStart = withGoogle => ({
    type: withGoogle ? actionTypes.GOOGLE_SIGN_IN_START : actionTypes.EMAIL_SIGN_IN_START
});
const signInFailure = error => ({
    type: actionTypes.SIGN_IN_FAILURE,
    error
});
const signInSuccess = user => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    user
});
export const signIn = (withGoogle, email, password, additionalUserInfo) => async dispatch => {
    dispatch(signInStart(withGoogle));
    try {
        const {user} = withGoogle ?
            await auth.signInWithPopup(googleProvider) :
            await auth.signInWithEmailAndPassword(email, password);
        const userRef = await createUserProfileDocument(user, additionalUserInfo);
        const snapshot = await userRef.get();
        dispatch(signInSuccess(
            {
                id: snapshot.id,
                ...snapshot.data()
            }
        ));
    } catch (e) {
        dispatch(signInFailure(e.message));
    }
};

export const checkUserSession = () => async dispatch => {
    try {
        const userAuth = await getCurrentUser();
        if (!userAuth) return;
        const userRef = await createUserProfileDocument(userAuth);
        const snapshot = await userRef.get();
        dispatch(signInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }));
    } catch (e) {
        dispatch(signInFailure(e.message));
    }
    dispatch({
        type: actionTypes.CHECK_USER_SESSION
    });
};

export const signOut = () => async dispatch => {
    try {
        await auth.signOut();
        dispatch({type: actionTypes.SIGN_OUT});
    } catch (e) {
        console.log('error sign out', e);
        dispatch({type: actionTypes.SIGN_OUT});
    }
};

const signUpStart = () => ({type: actionTypes.SIGN_UP_START});
const signUpFailure = error => ({type: actionTypes.SIGN_UP_FAILURE, error});
const signUpSuccess = user => ({type: actionTypes.SIGN_UP_SUCCESS, user});
export const signUp = (name, email, password) => async dispatch => {
    dispatch(signUpStart());
    try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        const userRef = await createUserProfileDocument(user, {displayName: name});
        const snapshot = await userRef.get();
        dispatch(signUpSuccess(
            {
                id: snapshot.id,
                ...snapshot.data()
            }
        ));
    } catch (e) {
        signUpFailure(e.message);
    }
};