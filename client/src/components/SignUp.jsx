import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


import "./signup.css";

export default function Register() {
  
  const [name, setName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [userType, setUserType] = useState("");
  const [charityName, setCharityName] = useState("");
 const [contactEmail, setContactEmail] = useState("");
 const [charityDescription, setCharityDescription] = useState("");
 const [goalAmount, setGoalAmount] = useState("");
 const [bannerImageUrl, setBannerImageUrl] = useState("");


  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
  
    let url;
    let data;
    if (userType === "Donor") {
      url = "http://127.0.0.1:3000/donor/signup";
      data = {
        first_name,
        last_name,
        email,
        password,
        
      };
    } else {
      url = "http://127.0.0.1:3000/charity/signup";
      data = {
        name,
        email,
        password,
        charityName,
        contactEmail,
        charityDescription,
        goalAmount,
        bannerImageUrl,
      };
    }
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        
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
   
    <div class="signcontainer mx-auto"   >
       <div class="signup-form">
        
      <div className="signupcontainer" >
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full' >
  
        <div className=' bg-lavender-100 flex flex-col justify-center' >
     
         
      
        

        <form onSubmit={handleSubmit} className="registration-form" style={{margin: "0 auto", width: "60%", marginTop: "20px"}}>
  
       <h3 className="signup-heading">Join Our Community </h3>
      
       <div className="m-4" >
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
      <div className='form-fields'>
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
       
          <div className="flex flex-col items-center mb-4">
            <button type="submit" className='signupbutton w-full my-5 py-2 bg-lavender-200 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-black font-semibold rounded-lg' onClick={handleSubmit}>REGISTER</button>
            <p class="mb-0 mt-2 pt-1 text-sm font-semibold">Already have an account? <Link to="/login" className="text-teal-500 hover:text-teal-600">Sign In</Link></p>
          </div>


        <div class="container" style={{backgroundcolor:"#f1f1f1"}}>
          <Link to="/home">
            <button className="cancelbtn" >X</button>
          </Link>

           
            
            
             
          </div>  
        </>
        </div>
       
       :
       <div className='form-fields'>
         <>
       <div className="mb-3">
         <label>FirstName</label>
         <input
           type="first_name"
           className="form-control"
           placeholder="firstname"
           onChange={(e) => setName(e.target.value)}
         />
       </div>
       <div className="mb-3">
         <label>LastName</label>
         <input
           type="last_name"
           className="form-control"
           placeholder="lastname"
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
       <button  type="submit" className=' signupbutton   w-full my-5 py-2 bg-lavender-200 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40  text-black  font-semibold rounded-lg' onClick={handleSubmit}>REGISTER</button>
        <div class="container " style={{backgroundcolor:"#f1f1f1"}}>
          <Link to="/home">
            <button className="cancelbtn" style={{ position: "absolute", top: 0, right: 0, zIndex: 1}} >X</button>
          </Link>

           
            
            
              <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                 Already have an account?
                
               <Link to="/login">Sign In</Link>
              </p>
          </div>    
       </>
       </div>
        }
       </form>

     </div>
     
     <div className='hidden sm:block' style={{position: 'relative'}}>
  <img className="w-32 mb-4'" 
       src="./Give Hope Logo.png"
       style={{height: "35px",width: "20%", position: 'absolute', top: 0, left: 0, zIndex: 1}}
       alt=""
       loading="lazy" />
  <img className="w-full h-full object-cover"
       src="https://res.cloudinary.com/dtnt2f8ao/image/upload/v1682256652/Give%20Hope/Water2Schools.avif"
       alt=""
       style={{position: 'relative', zIndex: 0}}
  />
</div>

       
    </div>
    </div>
        
       </div>
    </div>
  );
}