import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/user/user.actions';
import withSpinner from '../../hoc/withSpinner/withSpinner';

const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    React.useEffect(() => {
        dispatch(signOut());
        history.replace('/');
    }, [dispatch, history]);
    const RedirectWithSpinner = withSpinner(React.Fragment);

    return <RedirectWithSpinner isLoading={true}/>;
};

export default Logout;