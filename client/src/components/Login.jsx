import React, { useState } from "react";
import './login.css'
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Login (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("user");
  
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  

  const handleLogin = (event) => {
    event.preventDefault();
  
    let userType = "";
    switch (accountType) {
      case "donor":
        userType = "donor";
        break;
      case "charity":
        userType = "charity";
        break;
      case "administrator":
        userType = "administrator";
        break;
      
    }
    
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
       
        switch (userType) {
          case "donor":
            navigate("/CharitiesPage");
            break;
          case "charity":
            navigate("/CharityDashboard");
            break;
          case "administrator":
            navigate("/AdministratorDashBoard");
            break;
          
        }
      }
    });
  };

  function handleClick() {
    props.onFormSwitch('Register');
  }

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, accountType);
  };

  return (
    <div className="">
      <NavBar/>
      <div className="auth-form-container ">
      
      <form className="login-form" onSubmit={handleLogin}>
       <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="yourusername"
          id="name"
          name="name"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <div className="checkboxes">
          <label htmlFor="accountType">Account Type</label>
          <label>
            <input
              type="checkbox"
              name="accountType"
              value="donor"
              checked={accountType === "donor"}
              onChange={(e) => setAccountType(e.target.value)}
            />
            Donor
          </label>
          <label>
            <input
              type="checkbox"
              name="accountType"
              value="charity"
              checked={accountType === "charity"}
              onChange={(e) => setAccountType(e.target.value)}
            />
            Charity
          </label>
          <label>
           <input
            type="radio"
            name="accountType"
            value="administrator"
            checked={accountType === "administrator"}
            onChange={(e) => setAccountType(e.target.value)}
           />
           Administrator
         </label>
        </div>
        
        <button type="submit" >
            Log In
        </button>

      </form>
      <button
        className="link-btn"
        onClick={handleClick}
      >
        Don't have an account? Register here.
      </button>
      
    </div>
    </div>
  );
};

export default Login;