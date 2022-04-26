import React from 'react';

import MenuItem from '../../components/menu-item/menu-item.component';

import './shop.list.styles.scss';

class ShopList extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
      // {
      //   title: 'full bust',
      //   // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      //   id: 1,
      //   linkUrl: 'full bust'
      // },
      {
        title: 'corsets',
        // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'corsets'
      },
      // {
      //   title: 'cropped',
      //   // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      //   id: 3,
      //   linkUrl: 'cropped'
      // },
      {
        title: 'new',
        // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'new'
      },
      {
        title: 'sale',
        // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: 'large',
        id: 5,
        linkUrl: 'sale'
      },
      ]
    }
  }

  render() {
    return (
      <div className='shop-list-menu'>
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopList;