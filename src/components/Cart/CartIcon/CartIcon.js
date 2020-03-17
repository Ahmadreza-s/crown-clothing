import React from 'react';
import './CartIcon.scss';
import {ReactComponent as Logo} from '../../../assets/images/shopping-bag.svg';
import {useSelector} from 'react-redux';
import CartContext from '../../../contexts/cart/cart.context';

const CartIcon = () => {
    const context = React.useContext(CartContext);
    const items = useSelector(state => state.cart.cartItems);
    let sumQuantity = 0;
    items.forEach(item => sumQuantity += item.quantity);
    return (
        <div className='cart-icon' onClick={() => context.toggleHidden()}>
            <Logo className='shopping-icon'/>
            <span className='item-count'>{sumQuantity}</span>
        </div>
    );
};

export default CartIcon;