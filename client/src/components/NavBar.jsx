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


// <!--First navbar-->
// <nav
//   class="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
//   <div class="flex w-full flex-wrap items-center justify-between px-3">
//     <div>
//       <a
//         class="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
//         href="#">
//         <img
//           src="client/src/components/DonorPage/Give Hope Logo (1).png"
//           style="height: 20px"
//           alt=""
//           loading="lazy" />
//       </a>

//     </div>
//   </div>
// </nav>

// <!--Second navbar-->
// <nav
//   class="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
//   <div class="flex w-full flex-wrap items-center justify-between px-3">
//     <div>
//       <a
//         class="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
//         href="#">
//         <img
//           class="mr-2"
//           src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
//           style="height: 20px"
//           alt=""
//           loading="lazy" />
//         <span class="font-medium dark:text-neutral-200">MDBootstrap</span>
//       </a>
//     </div>
//   </div>
// </nav>