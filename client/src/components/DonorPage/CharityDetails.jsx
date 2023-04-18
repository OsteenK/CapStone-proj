import React, { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import './charitydetails.css';
import Charities from './Charities';


import BeneficiaryStories from '../BeneficiaryStories';




const CharityDetails = () => {
  const PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [beneficiaryStories, setBeneficiaryStories] = useState([]);
  const token = localStorage.getItem("token");


//   useEffect(() => {
//   fetch("http://127.0.0.1:3000/beneficiaries", {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json"
//   }
//   })
//   .then(response => response.json())
//   .then((data) => {
//   console.log(data);
//   setBeneficiaryStories(data);
//   // Do something with the response
//   })
//   .catch(error => {
//   console.log(error);
//   });
// }, [token]);

 const offset = currentPage * PER_PAGE;
  const beneficiaryStoriesToDisplay = beneficiaryStories.slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE);

  return (
    <div>
    <NavBar />
   
    <section className="hero-section">
        <div className="hero-image"></div>
        
      </section>
    <section className="content-section">
        <div className="content-container">
         <div className="content-card">
          <div className='card'  style={{backgroundColor: 'rgba(136, 98, 219, 0.3)'}}>
            <h1>HELP MERCY</h1>
           <p className='text2'>
            Mercy lives in an area with poor sanitation and access to water.Sustainable sanitation solutions for poor communities has the potential to solve a range of social and environmental challenges<br></br>Charity:Elevating Sanitary Facilities
            </p>
            <button className="card-button">Observe Impact</button>
          </div>
          
         </div>
        </div>
        <div className="content-text">
           <h2>Title</h2>
          <h3>Description</h3>
          <button className='btn btn'style={{backgroundColor:'#9840D7',borderRadius:'20px',margin:'30px'}}>Donate Now!</button>
        </div>
      
       
    </section>
        
    <section className="beneficiaryStoriesToDisplay-section">
        
    
      <BeneficiaryStories/>
     

    </section>
   
    {/* <Footer /> */}
  </div>
    

 )
}

export default CharityDetails