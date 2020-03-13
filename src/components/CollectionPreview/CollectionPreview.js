import React from 'react';
import './CollectionPreview.scss';
import {useHistory} from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({title, items}) => {
    const history = useHistory();
    return (
        <div className={'collection-preview'}>
            <h1 className={'title'}
                onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items.slice(0, 4).map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default CollectionPreview;