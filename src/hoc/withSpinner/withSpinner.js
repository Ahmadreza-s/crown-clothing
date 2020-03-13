import React from 'react';
import './withSpinner.scss';

const withSpinner = WrappedComponent => ({isLoading, ...props}) => {
    return isLoading ? (
            <div className='spinner-overlay'>
                <div className='spinner-container'/>
            </div>) :
        <WrappedComponent {...props}/>;
};

export default withSpinner;