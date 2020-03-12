import React from 'react';
import './Checkout.scss';
import {useSelector} from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

const Checkout = () => {
    const items = useSelector(state => state.cart.cartItems);
    let sumPrice = 0;
    items.forEach(item => sumPrice += item.quantity * item.price);

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                items.map(item => <CheckoutItem key={item.id} item={item}/>)
            }
            <div className='total'>
                <span>TOTAL : ${sumPrice}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit cart for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            <StripeButton price={sumPrice}/>
        </div>
    );
};

export default React.memo(Checkout);