import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/store';

import * as serviceWorker from './serviceWorker';

const LoadingPersistor = () => <h2>Please wait ...</h2>;

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor} loading={<LoadingPersistor/>}>
                    <App/>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root'));

serviceWorker.register();