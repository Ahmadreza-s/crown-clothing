import {
    EMAIL_SIGN_IN_START,
    GOOGLE_SIGN_IN_START,
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_OUT,
    SIGN_UP_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from './user.types';

const initialState = {
    currentUser: null,
    loading    : false,
    error      : null
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN_START:
        case EMAIL_SIGN_IN_START:
        case SIGN_UP_START:
            return {
                ...state,
                loading: true
            };
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading    : false,
                error      : null,
                currentUser: action.user
            };
        case SIGN_IN_FAILURE:
        case SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                error  : action.error
            };
        case SIGN_OUT:
            return {
                ...state,
                currentUser: null
            };
        default:
            return state;
    }
};
export default user;