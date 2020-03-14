import * as actionTypes from './Shop.types';

const initialState = {
    collections: {},
    loading    : true,
    error      : null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.collections,
                loading    : false,
                error      : null
            };
        case actionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error  : action.error
            };
        default:
            return state;
    }
}