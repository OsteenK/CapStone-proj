
import React, {  useContext, useState } from "react";
import Swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import login from '../components/login.css';

import {
  Dropdown,
  Input,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Input, Ripple,  Dropdown });



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userType, setUserType] = useState("userType");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  
  const handleLogin = (event) => {
    event.preventDefault();
  
    fetch("http://127.0.0.1:3000/login",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password, userType
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        // Show an error message
        console.log(response.message);
        
      } else {
        localStorage.setItem("token", response.jwt);
        console.log(response)
         // Navigate to the appropriate component
        Swal({
          title: "Success!",
          text: "LoggedIn successfully.",
          icon: "success",
          button: "OK",
        });
       
        if (userType === "administrator") {
          navigate("/administratordashboard");
        } 
        else if (userType === "charity"){
          navigate("/charitydashboard");
        }
        else  {
          navigate("/home");
        }
      }
    });
  };

  return (
 
    <div class="logncontainer mx-auto">
      <div class="login-form">
         <div className="logincontainer">
<div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full' >
  
<div className='hidden sm:block'>
    <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dtnt2f8ao/image/upload/v1682257030/Give%20Hope/AfriPads.avif' alt="" />
</div>

<div className=' bg-lavender-100 flex flex-col justify-center'>
<img className="signin-image" 
            src="Give Hope Logo (1).png"
            style={{height: "35px"}}
            alt=""
            loading="lazy" />
    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
        
        <h2 className="signin-heading">SIGN IN</h2>

       

        <div className='flex flex-col text-gray-400 py-2'>
            <label>Email</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="donor">Donor</option>
             <option value="charity">Charity</option>
              <option value="administrator">Administrator</option>
             </select>
        </div>
        
        <button className=' loginbutton   w-full my-5 py-2 bg-lavender-200 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40  text-black  font-semibold rounded-lg' onClick={handleLogin}>LOGIN</button>
         


         <div className="container" style={{backgroundcolor:"#f1f1f1"}}>
          <Link to="/home">
            <button className="cancelbtn" >X</button>
          </Link>

           
            
            
           <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                 Don't have an account?
                
               <Link to="/signup">Sign Up</Link>
              </p>
         </div>
    </form>
</div>
</div>
         </div>
      </div>
   </div>
  );
}