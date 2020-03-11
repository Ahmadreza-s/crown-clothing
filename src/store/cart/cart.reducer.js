import * as actionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

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
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.item)
            };
        case actionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.id !== action.item.id)
            };
        default:
            return state;
    }
};

export default reducer;