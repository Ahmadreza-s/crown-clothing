import * as actionTypes from './Shop.types';

const initialState = {
    collections: {},
    loading    : true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITIATE_COLLECTIONS:
            return {
                ...state,
                loading: true
            };
        case actionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.collections,
                loading    : false
            };
        default:
            return state;
    }
}