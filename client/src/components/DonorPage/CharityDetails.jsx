import React, { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import './charitydetails.css';


import { useParams } from 'react-router-dom';
import BeneficiaryStories from '../BeneficiaryStories';
import CharityCard from './CharityCard';




const CharityDetails = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [cardData, setCardData] = useState({});
 
  const [progress, setProgress] = useState(0.75); // 75% progress
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [charities, setCharities] = useState([]);


   // Pagination variables
   const itemsPerPage = 3; // Number of items per page
   const lastItemIndex = currentPage * itemsPerPage; // Calculate the index after the last item for the current page
   const firstItemIndex = lastItemIndex - itemsPerPage; // Calculate the index of the first item for the current page
 

   useEffect(() => {
  fetch(`http://127.0.0.1:3000/charities/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((charitiesData) => setCharities(charitiesData))
    .catch((error) => {
      console.log(error);
    });
}, [id, token]);
  const charitiesToDisplay = charities.filter((charity) => charity.approved)
  const charitiesPerPage = charitiesToDisplay.slice(firstItemIndex, lastItemIndex)

  return (
    <div>
    <NavBar />
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
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">A child is <br /><span className="text-blue-600">smilling because of you</span></h1>
            
            </div>
          </div>
          <div className="md:mb-12 lg:mb-0">
            <img
              src="https://res.cloudinary.com/dtnt2f8ao/image/upload/v1682256497/Give%20Hope/PadUp4NE.avif"
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
    {/* <section>
    {charitiesToDisplay.length > 0 && (
        <div className="px-6 py-32 md:px-12 text-center lg:text-left h-xl flex items-center" style={{backgroundImage: `url(${charitiesToDisplay.length > 0 ? charitiesToDisplay[0].img_url : ''})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="container mx-auto xl:px-32">
            <div className="flex items-center md:justify-end">

             
            </div>
          </div>
          
        </div>
    )}
      </section> */}
    <section className="content-section"style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <div className="card-grid"> 
    <div className='container'>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4'>
          {charitiesPerPage.map((charity) => <CharityCard key={charity.name} charity={charity}/>)}
        </div>  
      </div>
        <div className="content-text"style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
           <h2>Changing the World</h2>
          <h3> Thousands of girls have benefited from Give Hope’s constant effort to improve menstrual care. Read on to learn about the real-life impact of <span class="text-lavender-200 font-light">your donations</span> on the lives of these girls.</h3>
          <button className='btn btn' style={{backgroundColor:'#9840D7',borderRadius:'20px',margin:'30px'}} onClick={() => {window.location.href = 'https://checkout.stripe.com/c/pay/cs_test_a1wbe9GTyCQmrXKcsiMcn3kEbRCpCrGaL6hjHXgOm09ZTRdsxkubBybAAR#fidkdWxOYHwnPyd1blpxYHZxWjA0SH9OR2lBX3xgQnwyMnRKTWBKVHxuS0BAN1JxSDJMMUxXf1BhTWlWbGx%2FUlJhbzQ3SXRfPEJ%2FYWhkX0FdYVVxbEdvblZwQjRSaklOdGpnRz0xMjw8bDJvNTVTZn9tSjRUSycpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVoydkw3ZjI1V0IzXzQ0X0YxYmInKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqZm1gZm5qcHErdnF3bHVgK2ZqaConeCUl'}}>Donate Now!</button>

        </div>
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