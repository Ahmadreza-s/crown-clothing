import React from 'react';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import {Route, Redirect, Switch, useParams} from 'react-router-dom';

function App() {
    const z = useParams();
    console.log(z);
    return (
        <div>
            <Switch>
                <Route component={Homepage}
                       path='/'
                       exact/>
            </Switch>
        </div>
    );
}

export default App;
