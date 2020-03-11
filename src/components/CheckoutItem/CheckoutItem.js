import React from 'react';
import './CheckoutItem.scss';

const checkoutItem = ({item}) => {
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={item.imageUrl}/>
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">{item.quantity}</span>
            <span className="price">{item.price}</span>
            <div className="remove-button">
                &#10005;
            </div>
        </div>
    );
};

export default checkoutItem;