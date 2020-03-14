import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './root.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export const persistor = persistStore(store);