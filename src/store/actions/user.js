import * as actionTypes from './actionTypes';

export const setCurrentUser = user => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user
    };
};