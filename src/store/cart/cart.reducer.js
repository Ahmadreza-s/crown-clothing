import * as actionTypes from './cart.types';

const initalState = {
    hidden: true
};
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default reducer;