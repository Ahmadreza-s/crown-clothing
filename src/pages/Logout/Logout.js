import React from 'react';
import {Redirect} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const logout = () => {
    auth.signOut();
    return <Redirect to='/'/>;
};

export default logout;