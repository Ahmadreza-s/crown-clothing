import * as actionTypes from './cart.types';

export const toggleCart = () => ({type: actionTypes.TOGGLE_CART_HIDDEN});

export const addItem = item => ({type: actionTypes.ADD_ITEM, item});

export const removeItem = item => ({type: actionTypes.REMOVE_ITEM, item});

export const clearItemFromCart = item => ({type: actionTypes.CLEAR_ITEM_FROM_CART, item});

export const clearCart = () => ({type: actionTypes.CLEAR_CART});