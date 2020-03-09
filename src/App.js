import React from 'react';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Homepage/>
                </Route>
                <Route path='/shop'>
                    <ShopPage/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
