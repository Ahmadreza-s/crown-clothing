import * as actionTypes from './Shop.types';

export const initiateCollections = () => ({type: actionTypes.INITIATE_COLLECTIONS});

export const updateCollections = (collections) => ({
    type: actionTypes.UPDATE_COLLECTIONS,
    collections
});