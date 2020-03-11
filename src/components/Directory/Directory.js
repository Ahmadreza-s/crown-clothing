import React from 'react';
import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';
import {useSelector} from 'react-redux';

const Directory = () => {
    const sections = useSelector(state => state.directory.sections);
    return (
        <div className="directory-menu">
            {
                sections.map(section => (
                    <MenuItem
                        key={section.id}
                        title={section.title}
                        image={section.imageUrl}
                        link={section.linkUrl}
                        size={section.size}/>
                ))
            }
        </div>
    );
};

export default Directory;