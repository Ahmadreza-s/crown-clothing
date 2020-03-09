import React from 'react';
import './App.css';

import Homepage from './pages/Home/Home';
import {Route, Switch} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Authentication from './pages/Authentication/Authentication';

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Homepage/>
                </Route>
                <Route path='/shop'>
                    <Shop/>
                </Route>
                <Route path='/auth'>
                    <Authentication/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
