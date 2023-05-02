import React, { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import './charitydetails.css';
import BeneficiaryCard from '../BeneficiaryCard';
import Charities from './Charities';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import BeneficiaryStories from '../BeneficiaryStories';
import CharityCard from './CharityCard';
import AccordionBox from '../../AccordionBox';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Footer from '../Footer';


const CharityDetails = () => {
  const navigate = useNavigate();
  const [charity, setCharity] = useState(null);
  const [charities, setCharities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [stories, setStories] = useState([]);
  
  // const {charity.id} = useParams();
 
  const accordionData = [
    {
      title: "Make a difference in the life of a child",
      text:
        "Did you know that in many parts of Africa, girls miss school during their menstrual cycles because they lack access to adequate sanitary products? This can have a devastating impact on their education and future opportunities. By supporting our organization, you can help provide girls in Africa with the resources they need to manage their menstrual health and stay in school. Make a difference in the life of a child today.",
      status: true,
    },
    {
      title: "Let’s do the right thing now",
      text:
        "Doing the right thing now can lead to a better tomorrow. Whether it's supporting a charitable cause or making environmentally-conscious choices, every action we take can have a positive impact on the world around us.",
      status: false,
    },
    {
      title: "Join your hand with us for a better life",
      text:
        "Join us to make a positive impact on the lives of those who need it most. By working together, we can build a better future for communities in need. Your support can help us provide access to education, clean water, healthcare, and other essential services that can transform lives. Let's join hands and create a better world for all.",
      status: false,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
// Pagination variables
const itemsPerPage = 3; // Number of items per page
const lastItemIndex = currentPage * itemsPerPage; // Calculate the index after the last item for the current page
const firstItemIndex = lastItemIndex - itemsPerPage; // Calculate the index of the first item for the current page



  // Fetch charities from backend
  const location = useLocation();
  const { charityId } = location.state;
  console.log(charityId);

  useEffect(() => {
  
  fetch(`http://localhost:3000/charities/${charityId}`, {
      method: "GET",
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      
    })
    .then((response) => response.json())
    .then((charity) => {
      setCharity(charity);
      setBeneficiaries(charity.beneficiaries);
    });

  }, [charityId]);


// Filtering and Pagination of fetched data
const beneficiariesToDisplay =  beneficiaries.filter(( beneficiary) => beneficiary.approved);
const beneficiariesPerPage=  beneficiariesToDisplay.slice(firstItemIndex, lastItemIndex);


  return (
       

 
    
    <>
    <NavBar/>
       <div>
            <section className='hero-section'>
            <div
             className="px-6 py-32 md:px-12 text-center lg:text-left h-xl flex items-center"
             style={charity ? {
                  backgroundImage: `url(${charity.image_url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
               } : {}}
             >
              <div className="container mx-auto xl:px-32">
               <div className="flex items-center md:justify-end">
                     
                    
                   </div>
                 </div>
              </div>
            </section>
           
            <section className="mixer-area mixer-area3 text-center">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-heading mixer-heading">
                             
                          {charity &&<h1 class="mb-2 sm:mt-4 md:mt-5 text-5xl text-white font-extrabold leading-tight">{charity.name}</h1>}
                            {charity && <p class="mb-16 mt-4 text-xl text-center font-medium text-white">{charity.description}</p>}
                              <Link className="theme-btn" to="/donationform">
                                  start donation
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
      </section>

      <section className="beneficiaryStoriesToDisplay-section">
      <div className="beneficiary-block rounded-lg bg-lavender-100 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)]">
      <div class="sm:w-full lg:w-2/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8 text-center">
                    <h1 class="mb-2 sm:mt-4 md:mt-5 text-5xl text-white font-bold leading-tight">Changing the World</h1>
  <h2 className="mb-2 sm:mt-4 md:mt-5 text-5xl text-white text-align: center font-light leading-tight">Beneficiaries</h2>
  {beneficiaries &&
    beneficiaries
      .filter(
        (beneficiary, index) =>
          beneficiaries.findIndex(
            (b) =>
              b.id === beneficiary.id &&
              b.name === beneficiary.name &&
              b.description === beneficiary.description &&
              b.img_url === beneficiary.img_url
          ) === index
      )
      .map((beneficiary) => (
        <div class="card-column">
        <div key={beneficiary.id} className="card">
          <img src={beneficiary.img_url} alt={beneficiary.name} />
          <div className="card-body">
            <h5 className="card-title">{beneficiary.name}</h5>
            <p className="card-text">{beneficiary.description}</p>
          </div>
        </div>
        </div>
      ))}
      </div>
      </div>
</section>



         </div>
      
      <section className="faq-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">

              <div className="faq-img-box" >
                <img src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion-container">
                {accordionData.map(({ title, text, status }, index) => (
                  <AccordionBox
                    title={title}
                    text={text}
                    status={status}
                    key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </>
 

 )
}

export default CharityDetails;



