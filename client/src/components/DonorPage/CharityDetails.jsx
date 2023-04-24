import React, { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import './charitydetails.css';


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
    <main>
    <section className="hero-section">
     
     <div>    
     {/* container */}
  
     <section className="mb-10">
      {/* <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <button
            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <a className="navbar-brand text-blue-600" href="#!">
            <svg className="w-5 h-5 ml-2 lg:ml-0 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path>
            </svg>
          </a>
        </div>
        <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            <li className="nav-item">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
            </li>
            <li className="nav-item mb-2 lg:mb-0">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center lg:ml-auto">
          <button type="button" className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
          <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
        </div>
      </div>
     </nav> */}

      <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 flex items-center">
          <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{background: "hsla(0, 0%, 100%, 0.55)", backdropfilter: "blur(30px)"}}>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">The best offer <br /><span className="text-blue-600">for your business</span></h1>
              <a className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
              <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
            </div>
          </div>
          <div className="md:mb-12 lg:mb-0">
            <img
              src="client/src/components/DonorPage/photo-1584731683340-6495e2e103e9.avif"
              className="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
       </div>
       </div>
     </section>
  

     </div>

        
    </section>
    <section className="content-section">
        <div className="content-container">
         <div className="content-card">
           <img src="/home/rx/coding Repo/PHASE5/CapStone-proj/client/src/components/DonorPage/photo-1584731683340-6495e2e103e9.avif" alt="card-image" className="card-image" />
           <div className="card-info">
           <h3 className="card-title">Small Title</h3>
            <p className="card-text">Small Description</p>
           <div className="goal-bar">
            {/*Add your goal bar code here*/}
           </div>
           <button className="card-button">Observe Impact</button>
          </div>
        </div>
        <div className="content-text">
           <h2>Title</h2>
          <h3>Description</h3>
         <button className="content-button">Donate Now</button>
        </div>
       </div>
    </section>
        
    <section className="beneficiaryStoriesToDisplay-section">
        
     <div>
      <BeneficiaryStories/>
     </div>

    </section>
    </main>
    {/* <Footer /> */}
  </div>
    

 )
}

export default CharityDetails