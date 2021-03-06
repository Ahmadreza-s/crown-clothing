import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/user/user.actions';

const SignIn = () => {
    const dispatch = useDispatch();
    const [email, setEmailState] = React.useState('');
    const [password, setPasswordState] = React.useState('');

    const emailInputHandler = ({target}) => { setEmailState(target.value); };
    const passwordInputHandler = ({target}) => setPasswordState(target.value);

    const submitHandler = async event => {
        event.preventDefault();
        dispatch(signIn(false, email, password));
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
                    <Button onClick={() => dispatch(signIn(true))}
                            type='button'
                            isGoogleSignIn>
                        Sign In with google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;