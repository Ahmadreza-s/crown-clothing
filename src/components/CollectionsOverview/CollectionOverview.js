import React from 'react';
import './CollectionOverview.scss';
import {useSelector} from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = () => {
    const collections = useSelector(state => state.shop.collections);
    return (
        <div className='collections-overview'>
            {
                Object.entries(collections).map(([_, c]) => (
                    <CollectionPreview key={c.id} {...c}/>
                ))
            }
        </div>
    );
};

export default CollectionOverview;