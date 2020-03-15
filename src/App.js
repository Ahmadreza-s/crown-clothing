import React from 'react';
import './App.css';

import Homepage from './pages/Home/Home';
import {Redirect, Route, Switch} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Authentication from './pages/Authentication/Authentication';

import Logout from './pages/Logout/Logout';
import {useDispatch, useSelector} from 'react-redux';
import Checkout from './pages/Checkout/Checkout';
import {checkUserSession} from './redux/user/user.actions';

function App() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    React.useEffect(() => {
        dispatch(checkUserSession());
    }, []);
    return (
        <>
            <Header user={currentUser}/>
            <Switch>
                <Route exact path='/'>
                    <Homepage/>
                </Route>
                <Route path='/shop'>
                    <Shop/>
                </Route>
                <Route path='/checkout'>
                    <Checkout/>
                </Route>
                {
                    currentUser ?
                        <Route path='/logout'>
                            <Logout/>
                        </Route>
                        :
                        <Route path='/auth'>
                            <Authentication/>
                        </Route>
                }

                <Redirect to={'/'}/>
            </Switch>
        </>
    );
}

export default App;
