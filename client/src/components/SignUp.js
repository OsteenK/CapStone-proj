import React, { useState } from "react";
import './signup.css';

 function SignUp (props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleClick() {
    props.onFormSwitch('login');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, userType, acceptTerms);
  }

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  }
 
  return (
    <div className="auth-form-container bg-purple-350">
      <h2>SignUp</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className="text-color-black" value={username} name="username" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="username" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <div>
          <label htmlFor="userType">User Type</label>
          <div>
            <label htmlFor="donor">
              <input type="radio" id="donor" name="userType" value="donor" checked={userType === "donor"} onChange={handleUserTypeChange} />
              Donor
            </label>
          </div>
          <div>
            <label htmlFor="charity">
              <input type="radio" id="charity" name="userType" value="charity" checked={userType === "charity"} onChange={handleUserTypeChange} />
              Charity
            </label>
          </div>
        </div>
        <div className="text-black">
          <input type="checkbox" id="acceptTerms" name="acceptTerms" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />
          <label htmlFor="acceptTerms">I accept the terms and conditions</label>
        </div>
        <button className="bg-blue-800" type="submit">Sign Up</button>
      </form>
      <button className="link-btn text-black" onClick={handleClick}>Already have an account? Login here.</button>
    </div>
  );
}

export  default SignUp ;
