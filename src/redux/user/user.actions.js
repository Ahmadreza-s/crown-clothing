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
export const signIn = (withGoogle, email, password) => async dispatch => {
    dispatch(signInStart(withGoogle));
    try {
        const {user} = withGoogle ?
            await auth.signInWithPopup(googleProvider) :
            await auth.signInWithEmailAndPassword(email, password);
        const userRef = await createUserProfileDocument(user);
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