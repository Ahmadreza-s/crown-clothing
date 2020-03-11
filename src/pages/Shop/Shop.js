import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CollectionOverview from '../../components/CollectionsOverview/CollectionOverview';
import Collections from '../Collection/Collections';

const Shop = () => {
    return (
        <div className='shop'>
            <Switch>
                <Route exact path='/shop'>
                    <CollectionOverview/>
                </Route>
                <Route path='/shop/:category'>
                    <Collections/>
                </Route>
            </Switch>
        </div>
    );
};

export default React.memo(Shop);