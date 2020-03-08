import React from 'react';
import './CollectionPreview.scss';

import CollectionItem from '../CollectionItem/CollectionItem';

const collectionPreview = ({title, items}) => {
    return (
        <div className={'collection-preview'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items.slice(0, 4).map(item => <CollectionItem key={item.id} {...item}/>)
                }
            </div>
        </div>
    );
};

export default collectionPreview;