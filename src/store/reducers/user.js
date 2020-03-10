import * as actionTypes from '../actions/actionTypes';

const initialState = {currentUser: null};

const user = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user
            };
        default:
            return state;
    }
};
export default user;