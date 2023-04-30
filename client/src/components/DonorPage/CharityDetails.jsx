import React, { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import './charitydetails.css';
import BeneficiaryCard from '../BeneficiaryCard';
import Charities from './Charities';

import { useParams } from 'react-router-dom';
import BeneficiaryStories from '../BeneficiaryStories';
import CharityCard from './CharityCard';




const CharityDetails = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardData, setCardData] = useState({});
  const [progress, setProgress] = useState(0.75);
  const token = localStorage.getItem('token');
  const { id } = useParams();
  const [charities, setCharities] = useState([]);
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [beneficiaryStories, setBeneficiaryStories] = useState([]);
  const [charityBeneficiaries, setCharityBeneficiaries] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);

  const itemsPerPage = 3;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/charities/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((charitiesData) => {
        console.log(charitiesData);
        setCharities(charitiesData);
        setSelectedCharity(charitiesData[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, token]);

  useEffect(() => {
    if (selectedCharity) {
      fetch(`http://127.0.0.1:3000/charities/${selectedCharity.id}/beneficiaries`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((beneficiariesData) => {
          setCharityBeneficiaries(beneficiariesData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedCharity, token]);

  const charitiesToDisplay = charities.filter((charity) => charity.approved);
  const charitiesPerPage = charitiesToDisplay.slice(firstItemIndex, lastItemIndex);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(charitiesToDisplay.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
       
    <div>
    <NavBar />
    <section className="hero-section">
     
     <div>    
     {/* container */}
  
     <section className="mb-10">
      

      <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 flex items-center">
          <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{background: "hsla(270, 60%, 70%, 0.55)", backdropfilter: "blur(50px)"}}>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">A child is <br /><span className="text-lavender-600">smilling because of you</span></h1>
            
            </div>
          </div>
          
        </div>
       </div>
       </div>
    </section>
  

     </div>

        
    </section>
   
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

export default CharityDetails;



