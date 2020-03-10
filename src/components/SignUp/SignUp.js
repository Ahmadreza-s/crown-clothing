import React, {useState} from 'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

const SignUp = () => {
    const [userState, setUserState] = useState({
        displayName    : '',
        email          : '',
        password       : '',
        confirmPassword: ''
    });

    const inputHandler = event => {
        const {name, value} = event.target;
        setUserState(prevState => {
            return ({
                ...prevState,
                [name]: value
            });
        });
    };
    const submitHandler = async event => {
        event.preventDefault();
        if (userState.password !== userState.confirmPassword)
            alert('password don\'t match');
        else {
            try {
                const {user} = await auth.createUserWithEmailAndPassword(userState.email, userState.password);
                await createUserProfileDocument(user, {displayName: userState.displayName});
            } catch (e) {
                console.log(e, 'eroooooor sign up');
            }
        }
    };
    return (
        <div className='sign-up'>
            <h2 className={'title'}>I don't have an account</h2>
            <span className=''>Sign up with your email and password</span>
            <form className={'sign-up-form'} onSubmit={submitHandler}>
                <FormInput type='text'
                           label='Name'
                           name='displayName'
                           value={userState.displayName}
                           required
                           onChange={inputHandler}/>
                <FormInput type='email'
                           name='email'
                           label='Email'
                           value={userState.email}
                           required
                           onChange={inputHandler}/>
                <FormInput type='password'
                           name='password'
                           label='Password'
                           value={userState.password}
                           required
                           onChange={inputHandler}/>
                <FormInput type='password'
                           label='Confirm Password'
                           name='confirmPassword'
                           value={userState.confirmPassword}
                           required
                           onChange={inputHandler}/>
                <div className='button-container'>
                    <Button type='submit'>SIGN UP</Button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;