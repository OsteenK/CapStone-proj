import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import "./signup.css";

export default function Register() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ password_confirmation, setConfirmPassword ] = useState("")
  const [userType, setUserType] = useState("");
  const [charityName, setCharityName] = useState("");
 const [contactEmail, setContactEmail] = useState("");
 const [charityDescription, setCharityDescription] = useState("");
 const [goalAmount, setGoalAmount] = useState("");
 const [bannerImageUrl, setBannerImageUrl] = useState("");


  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
  
   
  
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
        userType,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/login");
        } else {
          // Handle error response
        }
      })
      .catch((error) => console.log(error));
  };
  
  switch (userType) {
    case "Donor":
      // Render donor fields
      break;
    case "Charity":
      // Render charity fields
      break;
  }

  return (
    // <div className="auth-wrapper container form-floating mb-3">
      <div className="auth-inner ">
        <form onSubmit={handleSubmit} className="registration-form">
          <h3>Sign Up</h3>
          <div className="m-4">
            Register As
            <input
              type="radio"
              name="UserType"
              value="Donor"
              onChange={(e) => setUserType(e.target.value)}
              className="px-4 "
            />
            Donor
            <input
              type="radio"
              name="UserType"
              value="Charity"
              onChange={(e) => setUserType(e.target.value)}
              className="px-4 "
            />
            Charity
          </div>
         
          
         {  userType === "Charity"? 
             <>
             <div>
               <label htmlFor="charityName">Charity Name:</label>
               <input
                 type="text"
                 id="charityName"
                 value={charityName}
                 onChange={(event) => setCharityName(event.target.value)}
               />
             </div>
             <div>
               <label htmlFor="contactEmail">Contact Email:</label>
               <input
                 type="email"
                 id="contactEmail"
                 value={contactEmail}
                 onChange={(event) => setContactEmail(event.target.value)}
               />
             </div>
             <div>
               <label htmlFor="password">Password:</label>
               <input
                 type="password"
                 id="password"
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}
               />
             </div>
             <div>
               <label htmlFor="goalAmount">Goal Amount:</label>
               <input
                 type="number"
                 id="goalAmount"
                 value={goalAmount}
                 onChange={(event) => setGoalAmount(event.target.value)}
               />
             </div>
             <div>
               <label htmlFor="bannerImageUrl">Banner Image URL:</label>
               <input
                 type="url"
                 id="bannerImageUrl"
                 value={bannerImageUrl}
                 onChange={(event) => setBannerImageUrl(event.target.value)}
               />
             </div>
             <div>
               <label htmlFor="charityDescription">Charity Description:</label>
              <textarea
                  id="charityDescription"
                   value={charityDescription}
                   onChange={(event) => setCharityDescription(event.target.value)}
              />
            </div>
   
           </>

          
          :
            <>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          </>
          
          }
        
      
      

       
        
  
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/login">sign in?</Link>
          </p>
        </form>
      </div>
    // </div>
  );
}
