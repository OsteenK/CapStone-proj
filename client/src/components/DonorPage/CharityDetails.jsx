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
   
    <section>
    {charitiesToDisplay.length > 0 && (
        <div className="px-6 py-32 md:px-12 text-center lg:text-left h-xl flex items-center" style={{backgroundImage: `url(${charitiesToDisplay.length > 0 ? charitiesToDisplay[0].img_url : ''})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="container mx-auto xl:px-32">
            <div className="flex items-center md:justify-end">

             
            </div>
          </div>
          
        </div>
    )}
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
          <button className='btn btn' style={{backgroundColor:'#9840D7',borderRadius:'20px',margin:'30px'}} onClick={() => {window.location.href = 'https://checkout.stripe.com/c/pay/cs_test_a1If8T1Axxjl7vPUVr7YxEL7MEkHbGKW2Hr7BrCz86OVNkKd1aDb9hrijr#fidkdWxOYHwnPyd1blpxYHZxWjA0SH9OR2lBX3xgQnwyMnRKTWBKVHxuS0BAN1JxSDJMMUxXf1BhTWlWbGx%2FUlJhbzQ3SXRfPEJ%2FYWhkX0FdYVVxbEdvblZwQjRSaklOdGpnRz0xMjw8bDJvNTVTZn9tSjRUSycpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVoydkw3ZjI1V0IzXzQ0X0YxYmInKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqZm1gZm5qcHErdnF3bHVgK2ZqaConeCUl'}}>Donate Now!</button>

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