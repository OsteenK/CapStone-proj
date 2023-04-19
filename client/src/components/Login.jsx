import React, { useState } from "react";
import './login.css'
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
function Login (props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleClick() {
    props.onFormSwitch('Register');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, accountType, acceptTerms);
  };

  return (
  
    <>
    <NavBar/>
    <div className="bg-purple-200">
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
        
        <button type="submit" disabled={!acceptTerms}>
          Log In
        </button>
      </form>
      <Link  to='/signup'> Don't have an account? Register here.
      </Link>
       
    </div>
    </div>
    </>
  );
};

export default Login;