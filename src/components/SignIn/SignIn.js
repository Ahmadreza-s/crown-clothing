import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const SignIn = () => {
    const [email, setEmailState] = React.useState('');
    const [password, setPasswordState] = React.useState('');

    const emailInputHandler = ({value}) => setEmailState(value);
    const passwordInputHandler = ({value}) => setPasswordState(value);

    const submitHandler = event => {
        event.preventDefault();
        //submit login
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput name='email'
                           type='email'
                           value={email}
                           required
                           onChange={emailInputHandler}
                           label='Email'/>
                <FormInput name='password'
                           type='password'
                           value={password}
                           required
                           onChange={passwordInputHandler}
                           label='Password'/>
                <div className='button-container'>
                    <Button type='submit'>
                        Sign In
                    </Button>
                    <Button>
                        Sign In with google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;