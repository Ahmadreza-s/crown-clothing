import React from 'react';
import {useHistory} from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({title, image, size, link}) => {
    const history = useHistory();

    const styles = ['menu-item'];
    if (size)
        styles.push(size);

    const clickHandler = React.useCallback(
        () => history.push(`/${link}`),
        [history, link]);

    return (
        <div className={styles.join(' ')} onClick={clickHandler}>
            <div className='background-image' style={{
                backgroundImage: `url(${image})`
            }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};


export default MenuItem;