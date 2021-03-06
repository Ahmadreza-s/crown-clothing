import * as actionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

const initialState = {
    cartItems: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
};

export default reducer;
