import React from 'react';
import './Cart.scss';
import Button from '../Button/Button';
import {useSelector} from 'react-redux';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const items = useSelector(state => state.cart.cartItems);
    return (
        <div className='cart'>
            <div className='cart-items'>
                {
                    items.map(item => <CartItem key={item.id} item={item}/>)
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default Cart;