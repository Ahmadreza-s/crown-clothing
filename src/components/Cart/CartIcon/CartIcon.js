import React from 'react';
import './CartIcon.scss';
import {ReactComponent as Logo} from '../../../assets/images/shopping-bag.svg';
import {useDispatch} from 'react-redux';
import {toggleCart} from '../../../store/cart/cart.actions';

const CartIcon = () => {
    const dispatch = useDispatch();
    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCart())}>
            <Logo className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
};

export default CartIcon;