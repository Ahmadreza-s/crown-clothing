import {createContext} from 'react';

const context = createContext({
    hidden      : true,
    toggleHidden: () => {}
});

export default context;