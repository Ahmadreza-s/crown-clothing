import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signOutAndClearCart} from '../../redux/user/user.actions';
import withSpinner from '../../hoc/withSpinner/withSpinner';

const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    React.useEffect(() => {
        dispatch(signOutAndClearCart());
        history.replace('/');
    }, [dispatch, history]);
    const RedirectWithSpinner = withSpinner(React.Fragment);

    return <RedirectWithSpinner isLoading={true}/>;
};

export default Logout;
