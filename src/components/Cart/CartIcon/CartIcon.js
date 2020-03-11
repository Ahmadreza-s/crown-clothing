import React from 'react';
import './CartIcon.scss';
import {ReactComponent as Logo} from '../../../assets/images/shopping-bag.svg';
import {useDispatch, useSelector} from 'react-redux';
import {toggleCart} from '../../../store/cart/cart.actions';

const CartIcon = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.cartItems);
    let sumQuantity = 0;
    items.forEach(item => sumQuantity += item.quantity);
    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCart())}>
            <Logo className='shopping-icon'/>
            <span className='item-count'>{sumQuantity}</span>
        </div>
    );
};

export default CartIcon;