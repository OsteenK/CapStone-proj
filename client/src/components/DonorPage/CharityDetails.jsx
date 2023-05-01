import React, { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import './charitydetails.css';
import BeneficiaryCard from '../BeneficiaryCard';
import Charities from './Charities';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import BeneficiaryStories from '../BeneficiaryStories';
import CharityCard from './CharityCard';




const CharityDetails = ({charity, cardData}) => {
  const navigate = useNavigate();
  const [charities, setCharities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [beneficiaries, setBeneficiaries] = useState([]);
  
// Pagination variables
const itemsPerPage = 3; // Number of items per page
const lastItemIndex = currentPage * itemsPerPage; // Calculate the index after the last item for the current page
const firstItemIndex = lastItemIndex - itemsPerPage; // Calculate the index of the first item for the current page



  // Fetch charities from backend
  useEffect(() => {
    if (charity) {
    fetch(`http://127.0.0.1:3000/charities/${charity.id}`)
      .then((response) => response.json())
      .then((charitiesData) => setCharities(charitiesData));
    }
  }, []);
  



// Filtering and Pagination of fetched data
const beneficiariesToDisplay =  beneficiaries.filter(( beneficiary) => beneficiary.approved);
const beneficiariesPerPage=  beneficiariesToDisplay.slice(firstItemIndex, lastItemIndex);

  
  return (
       
    <div>

      <section>
        <div className="px-6 py-32 md:px-12 text-center lg:text-left h-xl flex items-center" style={{ backgroundImage: `url(${ beneficiariesToDisplay[0]?.img_url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container mx-auto xl:px-32">
            <div className="flex items-center md:justify-end">

              {/* Text Card */}
              <div className="mb-12 p-12 lg:mb-0 lg:w-2/5 rounded-2xl bg-lavender-100/80 text-white text-left">
                <h1 className="mb-4 text-5xl text-white font-extrabold leading-tight">Help Mercy</h1>

                <p className="text-xl font-medium mb-6">Did you know that millions of girls like Mercy lack access to proper sanitary products, hindering their education and putting their health at risk?<br />You can make a difference by supporting charities that work to improve these conditions and empower girls around the world. Join the movement today and help create a brighter future for all girls.</p>

                <p className="text-xl font-medium mb-6"><strong>Charity:</strong> { beneficiariesToDisplay[0]?.name}</p>

                <a className="bg-lavender-200 rounded-3xl p-2.5 px-4 h-12 text-white text-lg font-bold bottom-0 hover:bg-lavender-300 no-underline" href="#charities">Donate Now!</a>
              </div>
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
    <div className='container'>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4'>
          {beneficiariesPerPage.map((beneficiary => <BeneficiaryStories key={beneficiary.id} Beneficiary={beneficiary} />))}
        </div>
      </div>
    
     
     

    </section>
   
    {/* <Footer /> */}
  </div>
    
   
 

 )
}

export default CharityDetails;



