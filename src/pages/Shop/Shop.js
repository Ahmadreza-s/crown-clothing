import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import {useSelector} from 'react-redux';

const Shop = () => {
    const collections = useSelector(state => state.shop.collections);
    return (
        <div className='shop'>
            {
                collections.map(c => (
                    <CollectionPreview key={c.id} {...c}/>
                ))
            }
        </div>
    );
};

export default Shop;