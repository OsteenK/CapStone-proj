import React  from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function NavBar(user) {
  console.log(user)
  const navigate = useNavigate();
  const token =localStorage.getItem('token');
  // Logout
  const logout = () =>{
    sessionStorage.clear();
    localStorage.clear();
     navigate("/login");
  }
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src='give-hope-logo.png' alt='Give Hope Logo' />
      </div>
      <div className='navbar-left'>
        <ul>
          
          
          <li>
              <Link to="/home" className="nav-link active">
              Home
                </Link>    
          </li>
          
          <li>
              <Link to="/charities" className="nav-link active">
              About
              </Link>    
          </li>
          <li>
              <Link to="/contactus" className="nav-link active">
                Contact Us
                </Link>    
          </li>
          <li>
              <Link to="/BeneficiariesS" className="nav-link active">
              Beneficiary Stories
              </Link>    
          </li>
          
        </ul>
        <div className='navbar-buttons'>
          

          <Link   to='/charities' >
          <button className='donate-button'>Donate</button>
          </Link>
          
          <Link   to='/login' >
          <button className='login-button'>Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;