import React from 'react';
 import './CharityDashboard.css';

function CharityDashboard() {
  return (
    <div>
      <header>
        <div className="navbar bg-purple-900">
          {/* <a href="#" class="logo"><img src="give-hope-logo.png" alt="Give Hope Logo"></a> */}
          <nav className=''>
            <ul>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Edit profile</a></li>
              <li><a href="#">Add Story</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <h1>Welcome to the Charity Dashboard!</h1>
    </div>
  )
}

export default CharityDashboard;
