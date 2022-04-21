import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import './footer.styles.scss';

const Footer = () => (
  <footer className='footer'>
    <p>Some footer nonsense!</p>
    <p>Contact</p>
    <div className='options'>
      <a className='option' href='https://www.instagram.com/creative.pigment/' target='blank'>
        Instagram
      </a>
    </div>
  </footer>
);

export default Footer;