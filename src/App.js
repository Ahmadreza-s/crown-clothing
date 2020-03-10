import React from 'react';
import './App.css';

import Homepage from './pages/Home/Home';
import {Redirect, Route, Switch} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Authentication from './pages/Authentication/Authentication';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Logout from './pages/Logout/Logout';

function App() {
    const [currentUser, setUserState] = React.useState(null);
    React.useEffect(() => {
        const subscription = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth, {});
                userRef.onSnapshot(snapshot => setUserState({
                    id: snapshot.id,
                    ...snapshot.data()
                }));
            }
            else
                setUserState(null);

        });

        //close the subscription
        return () => subscription();
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
