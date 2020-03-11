import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import CollectionOverview from '../../components/CollectionsOverview/CollectionOverview';
import Collections from '../Collection/Collections';

const Shop = () => {
    const match = useRouteMatch();
    return (
        <div className='shop'>
            <Switch>
                <Route exact path={`${match.url}`}>
                    <CollectionOverview/>
                </Route>
                <Route path={`${match.url}/:category`}>
                    <Collections/>
                </Route>
            </Switch>
        </div>
    );
};

export default Shop;