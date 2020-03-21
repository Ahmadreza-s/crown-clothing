import React, {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/shop/Shop.actions';
import withSpinner from '../../hoc/withSpinner/withSpinner';
import Spinner from '../../components/Spinner/Spinner';


const CollectionOverviewAsync = lazy(() => new Promise(resolve => {
    resolve(import('../../components/CollectionsOverview/CollectionOverview'));
}));
const CollectionOverviewWithSpinnerAsync = withSpinner(CollectionOverviewAsync);

const CollectionsAsync = lazy(() => new Promise(resolve => {
    resolve(import('../Collection/Collections'));
}));
const CollectionsWithSpinnerAsync = withSpinner(CollectionsAsync);


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


    return (
        <div className='shop'>
            <Suspense fallback={<Spinner/>}>
                <Route exact path='/shop'>
                    <CollectionOverviewWithSpinnerAsync isLoading={loading}/>
                </Route>
                <Route path='/shop/:category'>
                    <CollectionsWithSpinnerAsync isLoading={loading}/>
                </Route>
            </Suspense>
        </div>
    );
};

export default React.memo(Shop);