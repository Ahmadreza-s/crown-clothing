import React from 'react';
import './Cart.scss';
import Button from '../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/cart/cart.actions';
import CartItem from './CartItem/CartItem';
import {useHistory} from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.cartItems);
    const history = useHistory();
    const clickHandler = React.useCallback(() => {
        history.push('/checkout');
        dispatch(actions.toggleCart());
    }, [history]);
    return (
        <div className='cart'>
            <div className='cart-items'>
                {
                    items.length ?
                        items.map(item => <CartItem key={item.id} item={item}/>)
                        :
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <Button onClick={clickHandler}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default Cart;