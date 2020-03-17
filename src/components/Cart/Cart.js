import React from 'react';
import './Cart.scss';
import Button from '../Button/Button';
import {useSelector} from 'react-redux';
import CartItem from './CartItem/CartItem';
import {useHistory} from 'react-router-dom';
import CartContext from '../../contexts/cart/cart.context';

const Cart = () => {
    const items = useSelector(state => state.cart.cartItems);
    const history = useHistory();
    const context = React.useContext(CartContext);
    const clickHandler = React.useCallback(() => {
        context.toggleHidden();
        history.push('/checkout');
    }, [history, context]);
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