import React from 'react';
import './Authentication.scss';
import SignIn from '../../components/SignIn/SignIn';

const Authentication = () => {
    return (
        <div className='authentication'>
            <SignIn/>
            <SignIn/>
        </div>
    );
};

export default Authentication;