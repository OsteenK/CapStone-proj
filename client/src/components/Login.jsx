import React, { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert';


function Login (props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    props.onFormSwitch('Register');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, accountType, acceptTerms);
  };

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
    
    fetch("/login",{
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
            navigate("/AdministratorDashboard");
            break;
          
        }
      }
    });
  };
  
  return (
    <div className="">
      <div className="auth-form-container ">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        </div>
        
        <button type="submit" onClick={handleLogin} >
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