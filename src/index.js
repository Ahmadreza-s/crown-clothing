import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={() => <h2>Loading ...</h2>} persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));