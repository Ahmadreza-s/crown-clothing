import React from 'react';
import './CollectionItem.scss';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/cart/cart.actions';

const CollectionItem = ({item}) => {
    const dispatch = useDispatch();
    const addToCartHandler = React.useCallback(
        () => dispatch(addItem(item)),
        [item, dispatch]);
    return (
        <div className='collection-item'>
            <div className='image'
                 style={{
                     backgroundImage: `url(${item.imageUrl})`
                 }}/>
            <div className='collection-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>{item.price}</span>
            </div>
            <Button onClick={addToCartHandler}> Add to cart </Button>
        </div>
    );
};

export default CollectionItem;