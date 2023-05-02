import React, { useState } from 'react';

import CharityNavBar from './CharityNavBar';
import './CharityDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { donorData } from './donorData.js';
import Pagination from '../Pagination';
import { Link } from 'react-router-dom';
import Footer from "../Footer";

function CharityDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
 
  const itemsPerPage = 1;
  const lastItemIndex=currentPage*itemsPerPage
  const firstItemIndex=lastItemIndex-itemsPerPage
   const donorData = [
    {
      id: 1,
      firstName: 'Maggy',
      lastName: 'jerry',
      amount: '780',
      type: 'monthly',
      date: '7th November 2022',
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      amount: '6000',
      type: 'monthly',
      date: '9th August 2022',
    },
    {
      id: 3,
      firstName: 'anonymous',
      lastName: '',
      amount: '7009',
      type: 'one time',
      date: '14th Febuary 2023',
    },
    // ... add more donors data here
   ];
   const [beneficiary, setBeneficiary] = useState();
   const [beneficiaryData, setBeneficiaryData] = useState();
   const beneficiarydata=[
    {id:1,
    Name:"lory",
    region:"dadab",
    itemsreceived:"700",
    // story:"click to read",
    date:"5/6/22023"

    },
    {id:2,
      Name:"lvvy",
      region:"nakuru",
      itemsreceived:"800",
      // story:"click to read",
      date:"5/7/22023"
  
      }

   ]
  
   const donorsPerPage = donorData.slice(firstItemIndex,lastItemIndex)
//addammy,

const handleDelete = (beneficiary) => {
  const updatedData = beneficiarydata.filter((item) => item.id !== beneficiary?.id);
  setBeneficiaryData(updatedData);
};


  return (
    <div >
      <CharityNavBar/>
      <div className='header'>
        {/* <CharityNavBar /> */}
        <div className=' mt-9   '>
          <h3 className='text-white '>Charity Dashboard</h3>
          <p >Manage your donations and the stories of those </p>
           <p > benefited from them.</p> 
        </div>
      </div>
      <div className="my-28 text-gray-800 text-center px-32">
        <div className="grid md:gap-x-8 md:grid-cols-1 lg:gap-x-12 lg:grid-cols-3">

          {/* First Card */}
          <div className="rounded-2xl shadow-lg h-full block bg-lavender-200 text-left">
            <div className="p-6 pt-10">
               <h1 className="text-7xl font-extrabold text-white my-2 mt-5">{/*{activeCharities.reduce((acc, charity) => {return acc + charity.total_donations}, 0).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                })} */} $3,397 
                </h1> 
              <h3 className="text-4xl font-normal text-white mb-3"> of 5,000Raised</h3>
               <a className='text-lavender-200'>More info</a> 
            </div>
          </div>

          {/* Second Card */}
          <div className="rounded-2xl shadow-lg h-full block bg-lavender-400 text-left">
            <div className="p-6 pt-10">
              <h1 className="text-7xl font-extrabold text-white my-2 mt-5">{/*/{activeCharities.length}/*/} 
              </h1>
              <h3 className="text-8xl  text-white mb-6">30</h3>
              <h3 className="text-4xl font-normal text-white mb-3">Donors</h3>
              <a className='text-lavender-200 hover:text-lavender-100' href="#active-charities">More info {"->"}</a>
            </div>
          </div>

          {/* Third Card */}
          <div className="rounded-2xl shadow-lg h-full block bg-lavender-100 text-left">
            <div className="p-6 pt-10">
              <h1 className="text-7xl font-extrabold text-white my-2 mt-5">{/*{charityApplications.length}*/}
              4</h1>
              {/* <div className='beneficiary '> */}
              <h3 className="text-4xl font-normal text-white mt-6 mb-5">Beneficiary Stories</h3>
              <a className='text-lavender-200 hover:text-lavender-500' href="#charity-applications">More info {"->"}</a>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div id="charity-applications" className='h-100 w-100 bg-lavender-100 px-32 py-10 text-left'>
        <h1 className='text-white text-4xl font-bold'>Donations</h1>
        <p className='text-lavender-400'>These are the donors who have contributed to your charity.</p>
        
      <table className='table donor-text' style={{ backgroundColor: 'white', borderRadius: '20px' }}>
        <thead>
          <tr>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Amount </th>
            <th scope='col'>Type</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {donorsPerPage.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.firstName}</td>
              <td>{donor.lastName}</td>
              <td>{donor.amount}</td>
              <td>{donor.type}</td>
              <td>{donor.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
       <Pagination totalItems={donorData.length} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage}/>
    </div>
    <div id="active-charities" className='h-100 w-100 bg-white px-32 py-10 text-left border'>
        <h1 className='text-lavender-400 text-4xl font-bold'>Beneficiary Stories</h1>
        <p className='text-lavender-400'>These girl's lives have been permanently transformed for the better by your charity .</p>
        <table className="table donor-text">
          <thead>
            <tr>
              
              <th scope="col">First</th>
              <th scope="col">Region</th>
              <th scope="col">Item Received</th>
              <th scope="col">Story</th>
              <th scope="col">Date created</th>
            </tr>
          </thead>
          <tbody>
          {beneficiarydata.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.Name}</td>
              <td>{donor.region}</td>
              <td>{donor.itemsreceived}</td>
              <td><a href="/" target="_blank">click to read</a></td>
              <td>{donor.date}</td>
              <td><button className="delete-button" onClick={() => handleDelete(beneficiary)}>Delete</button>
</td>
            </tr>
          ))}
           
          </tbody>
        </table>
      </div>
      
      <Pagination totalItems={donorData.length} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage}/>
    
      <Footer />
      </div>
  )
}

export default CharityDashboard;
