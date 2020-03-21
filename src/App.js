import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {checkUserSession} from './redux/user/user.actions';

import './App.css';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import Logout from './pages/Logout/Logout';
import Home from './pages/Home/Home';


const AuthenticationAsync = lazy(() => new Promise(resolve => resolve(import('./pages/Authentication/Authentication'))));
const CheckoutAsync = lazy(() => new Promise(resolve => resolve(import('./pages/Checkout/Checkout'))));
const ShopAsync = lazy(() => new Promise(resolve => resolve(import('./pages/Shop/Shop'))));

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
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path='/shop'>
                            <ShopAsync/>
                        </Route>
                        <Route path='/checkout'>
                            <CheckoutAsync/>
                        </Route>
                        {
                            currentUser ?
                                <Route path='/logout'>
                                    <Logout/>
                                </Route>
                                :
                                <Route path='/auth'>
                                    <AuthenticationAsync/>
                                </Route>
                        }

                        <Redirect to={'/'}/>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </>
    );
}

export default App;
