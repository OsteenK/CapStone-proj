import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function CharityNavBar(user) {
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
    <nav className='navbar-charity '>
      <div className='navbar-left'>
  <img className='text-white' src='give-hope-logo.png' alt=' ' />
  <span style={{ fontSize: '25px',fontWeight: 'bold' }}>GIVE HOPE</span>
</div>

      <div className='navbar-left  '>
        <ul>
        <li>
              <Link to="/charitydashboard" className="nav-link active ,text-white" >
              Dashboard
                </Link>    
         </li>
         
         <li>
              <Link to="/charityform" className="nav-link active ,text-white" >
              EditProfile
              </Link>    
         </li>
         <li>
              <Link to="/beneficiaryform" className="nav-link active ,text-white" >
              Add Story
                </Link>    
         </li>
          
          
        </ul>
        <div className='navbar-buttons'>
          
        <Link to='/login'onClick ={logout} className="nav-link" aria-expanded="false">
         <button className='login-button'>logout</button>
        </Link>
          
          
        </div>
      </div>
      
    </nav>
  );
}

export default CharityNavBar;