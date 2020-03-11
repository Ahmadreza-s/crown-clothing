import * as actionTypes from './cart.types';
import {addItemToCart} from './cart.utils';

const initalState = {
    hidden   : true,
    cartItems: []
};
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.item)
            };
        default:
            return state;
    }
};

export default reducer;