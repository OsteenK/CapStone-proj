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


const CharityDetails = ({charity, cardData, data}) => {
  const navigate = useNavigate();
  const [charities, setCharities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [stories, setStories] = useState([]);
  
  // const {charity.id} = useParams();
 
  const accordionData = [
    {
      title: "Make a difference in the life of a child",
      text:
        "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
      status: true,
    },
    {
      title: "Let’s do the right thing now",
      text:
        "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
      status: false,
    },
    {
      title: "Join your hand with us for a better life",
      text:
        "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
      status: false,
    },
  ];

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
    .then((charities) => console.log(charities));

  }, [charityId]);


// Filtering and Pagination of fetched data
const beneficiariesToDisplay =  beneficiaries.filter(( beneficiary) => beneficiary.approved);
const beneficiariesPerPage=  beneficiariesToDisplay.slice(firstItemIndex, lastItemIndex);


  return (
       

 
    
    <>
       <div>
            <section className='hero-section'>
               <div className="px-6 py-32 md:px-12 text-center lg:text-left h-xl flex items-center" style={{ backgroundImage: 'https://images.unsplash.com/photo-1544476301-66914d9e95aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container mx-auto xl:px-32">
                   <div className="flex items-center md:justify-end">
                     
                    
                   </div>
                 </div>
              </div>
            </section>
           
    

           <section className="beneficiaryStoriesToDisplay-section">
           {stories.map((beneficiary) => (
           <div className="block rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)]">
            <img className="rounded-t-lg object-cover h-96 w-full" src={beneficiary.img_url} alt="beneficiary"/>            

            <div className="p-6 px-8">
                <h5 className="mb-2 py-2 text-2xl font-extrabold leading-tight text-lavender-200 text-center">
                    {`${beneficiary.name}, ${beneficiary.location}`}
                </h5>

                <p className="mb-4 text-base text-lavender-400">
                {beneficiary.description}
                </p>
                <p className="text-base text-lavender-400">
                    <strong className="">{beneficiary.name} received:</strong><br/>
                    {beneficiary.items}
                </p>

                
                
            </div>
        </div>
           ))};
          </section>
          
         </div>
      
      <section className="faq-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">

              <div className="faq-img-box">
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
      </>
 

 )
}

export default CharityDetails;



