import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/CollectionsOverview/CollectionOverview';
import Collections from '../Collection/Collections';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/shop/Shop.actions';
import withSpinner from '../../hoc/withSpinner/withSpinner';

const Shop = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.shop.loading);
    React.useEffect(() => {
        dispatch(actions.initiateCollections());
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => dispatch(actions.updateCollections(convertCollectionsSnapshotToMap(snapshot))));
    }, []);

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