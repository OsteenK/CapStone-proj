import React, { useState } from 'react';

import CharityNavBar from './CharityNavBar';
import './CharityDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import ReactPaginate from 'react-paginate';
import { donorData } from './donorData';


function CharityDashboard() {
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;

   const donorsData = [
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

  const pageCount = Math.ceil(donorsData.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div>
      <div className='header'>
        <CharityNavBar />
        <div className='mt-9'>
          <h3>Charity Dashboard</h3>
          <p>Manage your donations and the stories of those who benefited from them.</p>
        </div>
      </div>
      <div  className='cards'>
        <div className='card-1  ' style={{ width: '25rem', height: '18rem' }}>
        <div className='card-body mt-5 '>
      <h5 className='card-title text-white' style={{ fontSize: '80px', fontWeight: 'bold' }}>
        $ 3,397
      </h5>
      <p className='card-text text-white' style={{ fontSize: '38px', fontWeight: 'bold' }}>
        of $ 500 Raised 
      </p>
    </div>
        </div>
        
        <div className='card-2 card shadow-md' style={{ width: '25rem', height: '18rem' }}>
      <div className="text-secondary flex-1 p-6">
        <p className='text-white' style={{ fontSize: '80px', fontWeight: 'bold' }}>
          30
        </p>
        <h3 className='text-white' style={{ fontSize: '30px', fontWeight: 'bold' }}>
          Donors
        </h3>
        <a href="#" className="more-info mt-3 d-flex align-items-center">
          More info
          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </a>
      </div>
    </div>
    <div className='card-3 card shadow-md' style={{ width: '25rem', height: '18rem' }}>
      <div className='card-body'>
        <h2 className='text-white' style={{ fontSize: '80px', fontWeight: 'bold' }}>
          4
        </h2>
        <p className='text-white mb-20 ' style={{ fontSize: '30px', fontWeight: 'bold' }}>
          Beneficiary Stories
        </p>
      </div >
      
      <a href="#" className="more-info  d-flex align-items-center  pl-9 pb-9">
        More info
        <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
      </a>
      
    </div>
      </div>
      <div className='donor-table donor-text '>
      <h2>Donors</h2>
      <p>The list of donors to the Charity</p>
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
          {donorsData.slice(offset, offset + PER_PAGE).map((donor) => (
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

      {/* <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      /> */}
    </div>
      <div className='beneficiary-table donor-text'>
      <h2>Beneficiary Stories</h2>
      <p> Your contrubution has touched and breathed life to this angels, view here</p>
        <table className="table donor-text">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">First</th>
              <th scope="col">Region</th>
              <th scope="col">Item Receive</th>
              <th scope="col">Story</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td>Matha</td>
              <td>Bokot</td>
              <td>18</td>
              <td>joined massmedia </td>
              <td>8th Match 2023 </td>
              <td><button className='delete-button'>delete</button> </td>
            </tr>
            <tr>
              {/* <th scope="row">2</th> */}
              <td>mary</td>
              <td>Moyale</td>
              <td>6000</td>
              <td>Finished o level  </td>
              <td>1st December 2023</td>
              <td><button className='delete-button'>delete</button> </td>
            </tr>
            <tr>
              {/* <th scope="row">3</th> */}
              <td>Marya</td>
              <td>Taita</td>
              <td>7009</td>
              <td>became volunteer medic</td>
              <td>14th Febuary 2023</td>
              <td><button className='delete-button'>delete</button> </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default CharityDashboard;
