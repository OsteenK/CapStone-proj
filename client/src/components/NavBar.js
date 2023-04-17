import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src='give-hope-logo.png' alt='Give Hope Logo' />
      </div>
      <div className='navbar-left'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact Us</a></li>
          <li><a href='#beneficiaries'>Beneficiaries</a></li>
        </ul>
        <div className='navbar-buttons'>
          <button className='donate-button'>Donate</button>
          <button className='login-button'>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;