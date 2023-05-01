


import React, {  useContext, useState } from "react";
import Swal from 'sweetalert';
 import { useNavigate } from "react-router-dom";
 import { Link } from "react-router-dom";
import './login.css';


function Login({ setCurrentUser, setAppUserType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();




  const handleLogin = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/login", {
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
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        // Show an error message
        Swal({
          title: "Login Error",
          text: `${data.error}`,
          icon: "error",
          button: "Try Again"
        });
        
      } else {
        localStorage.setItem("token", data.jwt);
        // setCurrentUser(data.current_user)
        // setAppUserType(data.user_type)
         // Navigate to the appropriate component
        Swal({
          title: "Success!",
          text: "LoggedIn successfully.",
          icon: "success",
          button: "OK",
        });
       
        if (data.user_type === "Administrator") {
          navigate("/administratordashboard");
        } 
        else if (data.user_type === "Charity"){
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
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label style={{ marginRight: "10px" }}>
              Login As:
              <select
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                style={{ marginLeft: "5px" }}
              >
                <option value="donor">Donor</option>
                <option value="charity">Charity</option>
                <option value="administrator">Administrator</option>
              </select>
            </label>
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />

              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
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





