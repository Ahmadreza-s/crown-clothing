import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title, image, size, link}) => {
    const styles = ['menu-item'];
    if (size)
        styles.push(size);
    return (
        <div className={styles.join(' ')}>
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