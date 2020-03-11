import React from 'react';
import './Button.scss';

const button = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    const styles = ['custom-button'];
    if (isGoogleSignIn)
        styles.unshift('google-btn');
    if (inverted)
        styles.unshift('inverted');
    return (
        <button className={styles.join(' ')} {...otherProps}>
            {children}
        </button>
    );
};

export default button;