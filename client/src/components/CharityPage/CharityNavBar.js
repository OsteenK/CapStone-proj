import React from 'react';

import { Link } from 'react-router-dom';

function CharityNavBar() {
  return (
    <nav className='navbar-charity '>
      <div className='navbar-left'>
  <img className='text-white' src='give-hope-logo.png' alt=' ' />
  <span style={{ fontSize: '25px',fontWeight: 'bold' }}>GIVE HOPE</span>
</div>

      <div className='navbar-left  '>
        <ul>
          
          <li><a href='#dashboard' className='text-white'>Dashboard</a></li>
          <li><a href='#editprofile' className='text-white'>EditProfile</a></li>
          <li><a href='#addstory' className='text-white'>Add Story</a></li>
        </ul>
        <div className='navbar-buttons'>
          
          
          <Link   to='/logout' >
          <button className='login-button'>logout</button>
          </Link>
        </div>
      </div>
      
    </nav>
  );
}

export default CharityNavBar;