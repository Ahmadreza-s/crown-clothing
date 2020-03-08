import React, {Component} from 'react';
import './Directory.scss';

import MenuItem from '../MenuItem/MenuItem';

class Directory extends Component {
    state = {
        sections: [
            {
                title   : 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id      : 1,
                linkUrl : 'shop/hats'
            },
            {
                title   : 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id      : 2,
                linkUrl : 'shop/jackets'
            },
            {
                title   : 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id      : 3,
                linkUrl : 'shop/sneakers'
            },
            {
                title   : 'women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size    : 'large',
                id      : 4,
                linkUrl : 'shop/women'
            },
            {
                title   : 'men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size    : 'large',
                id      : 5,
                linkUrl : 'shop/men'
            }
        ]
    };

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(section => (
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
    }
}

export default Directory;