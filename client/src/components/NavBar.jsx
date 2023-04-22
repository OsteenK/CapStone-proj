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
    <nav className="navbar navbar-expand-lg shadow-md py-2  relative flex items-center w-full justify-between">
      <div className='navbar-left'>
        <img src='give-hope-logo.png' alt='Give Hope ' />
      </div>
      <div className='navbar-left'>
        <ul>
        
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <button
            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-5"
              role="img"
              xmlns=""
              viewBox="0 0 448 512"
            >
              <path
                fill=""
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          
         <div id="navbarSupportedContentY">
         <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
         
         
          <li>
          <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
           <Link to="/home" className="nav-link active"> Home</Link> </a>   
          
          </li>
          
          <li>
          <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Link to="/charities" className="nav-link active">About</Link></a>  
          </li>

          <li>
          <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <Link to="/ContactUs" className="nav-link active"> Contact Us</Link></a>    
          </li>

          <li>
          <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"> 
          <Link to="/BeneficiariesS" className="nav-link active">Beneficiary Stories</Link></a>  
          </li>
          
          
         
         </ul>
         </div>
      </div>
        
        <div className='navbar-buttons'>
          
          <button type="button" className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <Link to="/charities" className="nav-link active">Donate</Link></button>
          <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <Link to="/login" className="nav-link active">Login</Link></button>
        </div>
      
      </div>
      
      </ul>
      </div>
    
    
  </nav>
  
  );
}

export default NavBar;