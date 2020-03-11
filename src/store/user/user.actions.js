import * as actionTypes from './user.types';

export const setCurrentUser = user => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user
    };
};