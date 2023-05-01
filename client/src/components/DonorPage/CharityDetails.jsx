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
           
    <section className="content-section"style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
     <div id="charities" className="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8 text-center">
        <h1 className="mb-2 sm:mt-4 md:mt-14 text-5xl text-lavender-400 font-extrabold leading-tight">Active Charities</h1>

        <p className="mb-16 mt-4 text-xl text-center font-medium "> Each of <span className="text-lavender-200 font-bold">our carefully selected charities</span> aim to promote equality improve health outcomes and create a more just and equitable world for all, through <span className="text-lavender-200 font-bold">proper sanitation and sanitary products</span>.</p>
      </div>

    
    <div className="card-grid"> 
    <div className='container'>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4'>
        <div className="col card-group">
   <div className="card w-100">
    <img className="card-img-top max-h-64 object-cover" src={charity ? charity.img_url : (cardData && cardData.logo)} alt="..." />

    <div className="card-body">
      <h5 className="card-title font-bold text-lavender-200">{charity ? charity.name : (cardData && cardData.name)}</h5>
      <div className="max-h-32 overflow-hidden">
        <p className="card-text text-base text-left">{charity ? charity.description.slice(0, 200) : (cardData && cardData.description.slice(0, 200))}...</p>
      </div>

      {/* Progress Bar */}
      <div>
       <div className="h-3 w-full bg-lavender-100 rounded mt-4 mx-auto">
        <div className="h-3 bg-lavender-200 rounded" style={{ width: `${charity ? (charity.total_donations / charity.goal_amount) * 100 : (cardData && (cardData.raised / cardData.goal) * 100)}%` }}></div>
        </div>
         <span className="text-medium font-bold">Raised <span className="text-lavender-200">{charity ? toLocaleString(charity.total_donations) : (cardData && toLocaleString(cardData.raised))}</span> of {charity ? toLocaleString(charity.goal_amount) : (cardData && toLocaleString(cardData.goal))}</span>
      </div>


    </div>
   
  </div>
</div>
        </div>  
      </div>
       
          <button className='btn btn' style={{backgroundColor:'#9840D7',borderRadius:'20px',margin:'30px'}} onClick={() => {window.location.href = 'https://checkout.stripe.com/c/pay/cs_test_a1wbe9GTyCQmrXKcsiMcn3kEbRCpCrGaL6hjHXgOm09ZTRdsxkubBybAAR#fidkdWxOYHwnPyd1blpxYHZxWjA0SH9OR2lBX3xgQnwyMnRKTWBKVHxuS0BAN1JxSDJMMUxXf1BhTWlWbGx%2FUlJhbzQ3SXRfPEJ%2FYWhkX0FdYVVxbEdvblZwQjRSaklOdGpnRz0xMjw8bDJvNTVTZn9tSjRUSycpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVoydkw3ZjI1V0IzXzQ0X0YxYmInKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqZm1gZm5qcHErdnF3bHVgK2ZqaConeCUl'}}>Donate Now!</button>

       
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



