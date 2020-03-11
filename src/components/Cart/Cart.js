import React from 'react';
import './Cart.scss';
import Button from '../Button/Button';

const Cart = () => {
    return (
        <div className='cart'>
            <div className='cart-items'/>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default Cart;