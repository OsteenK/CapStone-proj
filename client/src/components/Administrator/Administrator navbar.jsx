import React  from 'react';
import './administratornavbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function administratornavbar(user) {
  console.log(user)
  
  const token =localStorage.getItem('token');
  // Logout
  
  return (
    <nav className='navbar'>
     <nav
  className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-lavendar-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-start px-3 justify-end">
  <div className="ml-auto">
        <a className="my-1 mr-2 flex items-center text-lavendar-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0" href="#">
          <img
            src="client/src/components/DonorPage/Give Hope Logo (1).png"
            style={{height: "20px"}}
            alt=""
            loading="lazy" />
        </a>
<div className='navbar-left'>
<ul>
  
  
  <li>
      <Link to="/home" className="nav-link active">
     Dashboard
        </Link>    
  </li>
  
  
  <li>
      <Link to="#active-charities" className="nav-link active">
        Active Charities
        </Link>    
  </li>
  <li>
      <Link to href="#charity-applications" className="nav-link active">
      Applications
      </Link>    
  </li>
  
</ul>
<div className='navbar-buttons'>
  

  
  <Link   to='/home' >
  <button className='login-button'>Logout</button>
  </Link>

</div>
</div>
    </div>
  </div>
</nav>
    </nav>
  );
}

export default administratornavbar;

