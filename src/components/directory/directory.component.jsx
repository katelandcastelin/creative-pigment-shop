import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
      // {
      //   title: 'full bust',
      //   imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      //   id: 1,
      //   linkUrl: 'full bust'
      // },
      // {
      //   title: 'underbust',
      //   imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      //   id: 2,
      //   linkUrl: 'underbust'
      // },
      // {
      //   title: 'cropped',
      //   imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      //   id: 3,
      //   linkUrl: 'cropped'
      // },
      {
        title: 'shop',
        // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop-list'
      },
      {
        title: 'lookbook',
        // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: 'large',
        id: 5,
        linkUrl: 'lookbook'
      },
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}

export default Directory;