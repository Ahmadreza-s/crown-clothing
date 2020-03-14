import * as actionTypes from './Shop.types';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

const fetchCollectionsStart = () => ({type: actionTypes.FETCH_COLLECTIONS_START});
const fetchCollectionsFailure = error => ({type: actionTypes.FETCH_COLLECTIONS_FAILURE, error});
const fetchCollectionsSuccess = collections => ({
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    collections
});

export const fetchCollections = () => dispatch => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection('collections');
    collectionRef.get()
        .then(snapshot => dispatch(fetchCollectionsSuccess(convertCollectionsSnapshotToMap(snapshot))))
        .catch(e => dispatch(fetchCollectionsFailure(e.message)));
};