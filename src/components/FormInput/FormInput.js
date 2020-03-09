import React from 'react';
import './FormInput.scss';

const formInput = ({onChange, label, ...otherProps}) => {
    const labelClasses = ['form-input-label'];
    if (otherProps.value)
        labelClasses.push('shrink');
    return (
        <div className='group'>
            <input className='form-input'
                   onChange={onChange}
                   {...otherProps}/>
            {
                label &&
                <label className={labelClasses.join(' ')}>
                    {label}
                </label>
            }
        </div>
    );
};

export default formInput;