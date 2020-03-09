import React from 'react';
import './Button.scss';

const button = ({children, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    );
};

export default button;