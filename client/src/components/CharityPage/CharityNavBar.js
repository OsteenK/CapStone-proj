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
      <a className="my-1 mr-2 flex items-center text-lavendar-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0 justify-start" style={{marginRight: "290px"}} href="/home">
          <img
            src="Give Hope Logo (1).png"
            style={{height: "62px"}}
            alt=""
            loading="lazy" />
        </a>
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