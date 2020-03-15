import React from 'react';
import './Authentication.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import withSpinner from '../../hoc/withSpinner/withSpinner';
import {useSelector} from 'react-redux';

const Authentication = () => {
    const loading = useSelector(state => state.user.loading);
    const SignInWithSpinner = withSpinner(SignIn);
    const SignUpWithSpinner = withSpinner(SignUp);

    //todo: handle signUp & signIn errors
    return (
        <div className='authentication'>
            {
                loading ?
                    <SignInWithSpinner isLoading={loading}/>
                    :
                    (
                        <>
                            <SignInWithSpinner isLoading={loading}/>
                            <SignUpWithSpinner isLoading={loading}/>
                        </>
                    )
            }
        </div>
    );
};

export default Authentication;