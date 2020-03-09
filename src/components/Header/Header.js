import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/images/crown.svg';
import {Link} from 'react-router-dom';

const header = ({user}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    user ?
                        <Link className='option' to='/logout'>
                            LOGOUT
                        </Link>
                        :
                        <Link className='option' to={'/auth'}>
                            SIGN IN
                        </Link>
                }
            </div>
        </div>
    );
};

export default header;