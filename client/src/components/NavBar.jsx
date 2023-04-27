import React  from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert';

function NavBar({ currentUser, userType }) {

  const navigate = useNavigate();
  const token =localStorage.getItem('token');

  // Event Handlers
  // Logout
  const handleLogout = () =>{
    sessionStorage.clear();
    localStorage.clear();
    Swal({
      title: "Logged Out",
      text: "Log out successful",
      icon: "success",
      button: "OK"
    })
    navigate("/");
  }

  // NavBar Links for each user
  const donorNavLinks = (
    <ul className='list-style-none mb-0 font-bold flex pl-0 lg:flex-row items-center'>
      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2  sm:text-lg lg:text-xl font-bold'>
          <a href="/" className="active text-white no-underline hover:underline">
            Home
          </a>    
      </li>
      
      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2  sm:text-lg lg:text-xl font-bold'>
          <a href="/charities" className="active text-white no-underline hover:underline">
            Our Charities
          </a>    
      </li>

      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2  sm:text-lg lg:text-xl font-bold'>
          <a href="/beneficiarystories" className="active text-white no-underline hover:underline hover:text-lavender-400">
            Beneficiary Stories
          </a>    
      </li>

      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2  sm:text-lg lg:text-xl font-bold'>
          <a href="/contactus" className="active text-white no-underline hover:underline">
            Contact Us
          </a>    
      </li>

      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2 text-lg font-bold bg-lavender-200 hover:bg-lavender-300 p-2 px-3 rounded-3xl'>
          <a href="/charities" className="active text-white no-underline">
            Donate!
          </a>    
      </li>

      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2 text-lg font-bold bg-lavender-200 hover:bg-lavender-300 p-2 px-3 rounded-3xl'>
          <a href={token ? "/" : "/login"} className="active text-white no-underline"  onClick={token ? handleLogout : ""}>
          {token ? "Logout" : "Login"}
          </a>    
      </li>
    </ul>
  )

  const charityNavLinks = (
    <ul className='list-style-none mb-0 font-bold flex pl-0 lg:flex-row items-center'>
      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2  sm:text-lg lg:text-xl font-bold'>
          <a href="/charitydashboard" className="active text-white no-underline hover:underline">
            Dashboard
          </a>    
      </li>
      
      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2  sm:text-lg lg:text-xl font-bold'>
          <a href="/charityeditform" className="active text-white no-underline hover:underline">
            Edit Profile
          </a>    
      </li>

      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2  sm:text-lg lg:text-xl font-bold'>
          <a href="/beneficiaryform" className="active text-white no-underline hover:underline hover:text-lavender-400">
            Add Story
          </a>    
      </li>

      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2  sm:text-lg lg:text-xl font-bold'>
          <a href="/contactus" className="active text-white no-underline hover:underline">
            Contact Us
          </a>    
      </li>

      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2 text-lg font-bold bg-lavender-200 hover:bg-lavender-300 p-2 px-3 rounded-3xl'>
          <a href={token ? "/" : "/login"} className="active text-white no-underline"  onClick={token ? handleLogout : ""}>
          {token ? "Logout" : "Login"}
          </a>    
      </li>
    </ul>
  )

  const administratorNavLinks = (
    <ul className='list-style-none mb-0 font-bold flex pl-0 lg:flex-row items-center'>
      <li className='sm:mx-4 my-4 lg:my-0 lg:pr-2 text-lg font-bold bg-lavender-200 hover:bg-lavender-300 p-2 px-3 rounded-3xl'>
          <a href={token ? "/" : "/login"} className="active text-white no-underline"  onClick={token ? handleLogout : ""}>
            {token ? "Logout" : "Login"}
          </a>    
      </li>
    </ul>
  )

  return (
    <nav className={`relative w-full flex-wrap items-center justify-between py-2 lg:py-4 sticky top-0 z-10 ${userType === "Charity"? "bg-lavender-400" : "bg-lavender-100"}`}>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div  className='lg:visible sm:invisible sm:h-0 lg:h-full'>
          <a className="my-1 mr-2 flex items-center text-white lg:mb-0 lg:mt-0" href={(userType === "Donor" || userType === undefined) ? "/" : "#"}>
            <img
              className=""
              src={userType === "Charity" ? "https://res.cloudinary.com/dtnt2f8ao/image/upload/v1682622014/Give%20Hope/Give%20Hope%20Logos/Give_Hope_Logo_dark_mlaztl.png" : "https://res.cloudinary.com/dtnt2f8ao/image/upload/v1682512809/Give%20Hope/Give%20Hope%20Logos/Give_Hope_Logo_light_vywhpr.png"}
              alt="Give Hope Logo"
              loading="lazy"/>
          </a>
        </div>
        

        <div>
          {(userType === "Donor" || userType === undefined) ? donorNavLinks: []}
          {userType === "Charity" ? charityNavLinks: []}
          {userType === "Administrator" ? administratorNavLinks: []}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;