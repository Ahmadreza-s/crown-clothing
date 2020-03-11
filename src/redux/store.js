import {compose, createStore} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './root.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

const persistor = persistStore(store);

export {store, persistor};