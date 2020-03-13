import React from 'react';
import './CheckoutItem.scss';
import {useDispatch} from 'react-redux';
import * as actions from '../../redux/cart/cart.actions';

const CheckoutItem = ({item}) => {
    const dispatch = useDispatch();
    const removeHandler = React.useCallback(
        () => dispatch(actions.clearItemFromCart(item)),
        [dispatch, item]);
    const addQuantityHandler = React.useCallback(() => dispatch(actions.addItem(item)), [dispatch, item]);
    const removeQuantityHandler = React.useCallback(() => dispatch(actions.removeItem(item)), [dispatch, item]);
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img alt={item.name} src={item.imageUrl}/>
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeQuantityHandler}>&#10094;</div>
                <span className="value">{item.quantity}</span>
                <div className="arrow" onClick={addQuantityHandler}>&#10095;</div>
            </span>
            <span className="price">{item.price}</span>
            <div className="remove-button" onClick={removeHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;