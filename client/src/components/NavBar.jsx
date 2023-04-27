import React  from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function NavBar(user) {
  console.log(user)
  const navigate = useNavigate();
  const token =localStorage.getItem('token');
  // Logout
  const handleLogout = () =>{
    sessionStorage.clear();
    localStorage.clear();
     navigate("/home");
  }
  return (
    <nav className='navbar'>
      
     <nav
  className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-lavendar-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-start px-3 justify-end">
  <div className="ml-auto">
      
<div className='navbar-left'>
<a className="my-1 mr-2 flex items-center text-lavendar-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0 justify-start" style={{marginRight: "290px"}} href="/home">
          <img
            src="Give Hope Logo.png"
            style={{height: "62px"}}
            alt=""
            loading="lazy" />
        </a>
<ul>
  
  
  <li>
      <Link to="/home" className="nav-link active" >
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
      <Link to="/beneficiarystories" className="nav-link active">
      Beneficiary Stories
      </Link>    
  </li>
  
</ul>
<div className='navbar-buttons'>
  

  <Link   to='/charities' >
  <button className='donate-button'>Donate</button>
  </Link>
  
  {token ? (
  <button onClick={handleLogout}>Logout</button>
) : (
  <Link   to='/login' >
  <button className='login-button'>Login</button>
  </Link>
)}
</div>
</div>
    </div>
  </div>
</nav>
    </nav>
  );
}

export default NavBar;


