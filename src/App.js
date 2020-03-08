import React from 'react';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import {Route, Redirect, Switch, useParams} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
    const z = useParams();
    console.log(z);
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Homepage/>
                </Route>
                <Route path='/shop'>
                    <ShopPage/> 
                </Route>
            </Switch>
        </div>
    );
}

export default App;
