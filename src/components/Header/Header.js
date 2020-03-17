import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/images/crown.svg';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CartIcon from '../Cart/CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import CartContext from '../../contexts/cart/cart.context';

const Header = () => {
    const user = useSelector(state => state.user.currentUser);
    const [cartHidden, setCartHidden] = React.useState(true);
    const toggleCartHidden = () => setCartHidden(prevState => !prevState);
    return (
        <CartContext.Provider value={{
            hidden      : cartHidden,
            toggleHidden: toggleCartHidden
        }}>
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
        </CartContext.Provider>
    );
};

export default Header;