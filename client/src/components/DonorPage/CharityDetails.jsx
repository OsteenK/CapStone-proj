import react from "react";
import charitydetails from "./charitydetails.css";
 

import React from 'react'
import NavBar from "../NavBar";

const CharityDetails = () => {
  return (
    
  <section className="charitydetails section" id="charitydetails">
     <NavBar/>
    <div class="container">
     <div class="top-container">
      <div class="charitydetails_img" style="background-image: url(your-image-url)"></div>
     <div class="translucent-card">
       <h2>Title</h2>
       <p>Description</p>
       <button>Donate</button>
     </div>
    </div>
   <div class="bottom-container">
    <div class="card">
        <img src="your-image-url"/>
       <h2>Title</h2>
       <p>Description</p>
       <button>Donate</button>
    </div>
    <div class="card">
       
       <h2>Title</h2>
       <p>Description</p>
       <button>Donate</button>
    </div>
    <div class="card">
     <img src="your-image-url"/>
       <h2>Title</h2>
       <p>Description</p>
       <button>Donate</button>
    </div>
    <div class="pagination">
      <img src="your-image-url"/>
       <h2>Title</h2>
       <p>Description</p>
       <button>Donate</button>
    </div>
  </div>
 </div>


   </section>
 )
}

export default CharityDetails