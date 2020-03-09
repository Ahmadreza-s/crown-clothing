import React from 'react';
import './Button.scss';

const button = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-btn' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default button;