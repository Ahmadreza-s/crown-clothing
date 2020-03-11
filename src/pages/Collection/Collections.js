import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import './Collections.scss';


const Collections = () => {
    const params = useParams();
    const items = useSelector(state => state.shop.collections[params.category]);

    return (
        <>
            {
                !items ?
                    <Redirect to='/'/>
                    :
                    <div className='collection-page'>
                        <h2 className='title'>{items.title}</h2>
                        <div className='items'>
                            {
                                items.items.map(item => <CollectionItem key={item.id} item={item}/>)
                            }
                        </div>
                    </div>
            }

        </>
    );
};

export default Collections;