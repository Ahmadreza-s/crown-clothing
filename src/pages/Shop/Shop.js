import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/CollectionsOverview/CollectionOverview';
import Collections from '../Collection/Collections';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/shop/Shop.actions';
import withSpinner from '../../hoc/withSpinner/withSpinner';

const Shop = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.shop.loading);
    const error = useSelector(state => state.shop.error);
    React.useEffect(() => {
        dispatch(actions.fetchCollections());
    }, [dispatch]);

    if (error) {
        alert('خطایی رخ داده است');
        console.log(error);
    }

    const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
    const CollectionsWithSpinner = withSpinner(Collections);


    return (
        <div className='shop'>
            <Route exact path='/shop'>
                <CollectionOverviewWithSpinner isLoading={loading}/>
            </Route>
            <Route path='/shop/:category'>
                <CollectionsWithSpinner isLoading={loading}/>
            </Route>

        </div>
    );
};

export default React.memo(Shop);