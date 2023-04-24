import React from "react";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import CharityCard from "./CharityCard";
import Pagination from "../Pagination";
import LoadingScreen from "../LoadingScreen";
import { Link } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = () => {

  const [charities, setCharities] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 3; // Number of items per page
  const lastItemIndex = currentPage * itemsPerPage; // Calculate the index after the last item for the current page
  const firstItemIndex = lastItemIndex - itemsPerPage; // Calculate the index of the first item for the current page

 // Fetch charities from backend
 useEffect(() => {
  fetch("http://127.0.0.1:3000/charities")
  .then((response) => response.json())
  .then((charitiesData) => setCharities(charitiesData))
}, [])

  const charitiesToDisplay = charities.filter((charity) => charity.approved)
  const charitiesPerPage = charitiesToDisplay.slice(firstItemIndex, lastItemIndex)

  if(charities.length === 0) {
    return (<LoadingScreen />)
  }

  return (
    <div>
      <NavBar />
     
      <main>
      <section className="hero-section">
          <div className="hero-image"></div>
          <div className="hero-card">
            <h1>Put a smile on her face</h1>
            <p className="hero-card-paragraph">
              Millions of girls around the world miss school and suffer from shame and stigma because they don't have access to menstrual products. This affects their education, health, and overall well-being. By donating to our charities, you can help empower girls with dignity and confidence, and ensure they have the resources they need to succeed.
            </p>
            <Link to="/charities" className="hero-card-button">Donate Now</Link>
  
          </div>
        </section>
        <section className="content-section">
          <h2>OUR MISSION</h2>
          <h3>Empower girls with DIGNITY and CONFIDENCE.</h3>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-icon mission-icon1"></div>
              <h3 className="mission-title">Provide Education</h3>
              <p className="mission-text">Empowering girls around the world with access to menstrual hygiene products, so they can stay in school, participate in their communities, and achieve their full potential.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon mission-icon2"></div>
              <h3 className="mission-title">Support Health</h3>
              <p className="mission-text">Providing every girl with access to basic sanitary products, and breaking down the barriers that prevent girls from achieving their dreams.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon mission-icon3"></div>
              <h3 className="mission-title">Fight Poverty</h3>
              <p className="mission-text">Promoting equality, improving health outcomes and creating a more just and equitable world for all by providing menstrual hygiene products to girls in need.</p>
            </div>
          </div>
          <button className="fight-button">JOIN THE FIGHT!</button>
        </section>
        <section className="causes-section">
        <div id="charities" className="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8">
        <h1 className="mb-2 sm:mt-4 md:mt-14 text-5xl text-lavender-400 font-extrabold leading-tight">Active Charities</h1>
        
        <p className="mb-16 mt-4 text-xl text-center font-medium "> Each of <span className="text-lavender-200 font-bold">our carefully selected charities</span> aim to promote equality improve health outcomes and create a more just and equitable world for all, through <span className="text-lavender-200 font-bold">proper sanitation and sanitary products</span>.</p>
      </div>

      <div className='container charities-container'>
      {/* Charity Cards */}
      <div className='container'>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4'>
          {charitiesPerPage.map((charity) => <CharityCard key={charity.name} charity={charity}/>)}
        </div>  
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalItems={charitiesToDisplay.length} itemsPerPage={itemsPerPage} scrollTo={"charities"}/>
      </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
   
  );
};

export default LandingPage;
