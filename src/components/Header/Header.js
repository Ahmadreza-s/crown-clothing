import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/images/crown.svg';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CartIcon from '../Cart/CartIcon/CartIcon';
import Cart from '../Cart/Cart';

const Header = () => {
    const user = useSelector(state => state.user.currentUser);
    const cartHidden = useSelector(state => state.cart.hidden);
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
                            AUTH
                        </Link>
                }
                {React.useMemo(() => <CartIcon/>, [])}
            </div>
            {
                !cartHidden && <Cart/>
            }
        </div>
    );
};

export default Header;