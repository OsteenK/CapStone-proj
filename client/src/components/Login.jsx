


import React, {  useContext, useState } from "react";
import Swal from 'sweetalert';
 import { useNavigate } from "react-router-dom";
 import { Link } from "react-router-dom";
import './login.css';




 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();




  const handleLogin = (event) => {
    event.preventDefault();

    fetch("/login", {
      method: "POST",
      headers:{
      
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        userType,
      })
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          // Show an error message
          console.log(response.message);
        } else {
          localStorage.setItem("token", response.jwt);
          console.log(response);
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
 
<div className="logncontainer mx-auto">
  <div className="login-form">
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
    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={handleLogin}>
        
        <h2 className="signin-heading">SIGN IN</h2>

       

        <div className='flex flex-col text-gray-400 py-2'>
            <label>Email address</label>
            <input 
            type="email" 
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input 
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
           
            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
            
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="donor">Donor</option>
             <option value="charity">Charity</option>
              <option value="administrator">Administrator</option>
             </select>
        </div>
        
        <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
             Login
            </button>
          </div>
         


         <div className="container" style={{backgroundcolor:"#f1f1f1"}}>
           <Link to="/home">
            <button className="cancelbtn" >X</button>
           </Link>

           
            
            
           <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
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

export default Login;






