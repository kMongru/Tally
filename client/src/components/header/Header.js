import React from 'react';
import './header.css';
import logo from '../../assets/tally.png';

const Header = () => {
  return (
    <div className='header_container'>
      <img style={{ height: '5vh', width: '5vh' }} src={logo} alt='logo' />
      <h2 style={{ marginLeft: '1rem' }}>Tally</h2>
    </div>
  );
};

export default Header;
