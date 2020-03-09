import React from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const Shop = () => {
    const [collections, setCollections] = React.useState(SHOP_DATA);
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