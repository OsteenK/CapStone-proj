import React from 'react';
import CharityNavBar from './CharityNavBar';
import './CharityDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function CharityDashboard() {
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
      <p> The list of donors to the Charity</p>
      <table className="table donor-text" style={{ backgroundColor: 'white', borderRadius: '20px'}}>

          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Amount </th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td>Maggy</td>
              <td>jerry</td>
              <td>780</td>
              <td>monthly</td>
              <td>7th November 2022</td>
            </tr>
            <tr>
              {/* <th scope="row">2</th> */}
              <td>Jacob</td>
              <td>Thornton</td>
              <td>6000</td>
              <td>monthly</td>
              <td>9th August 2022</td>
            </tr>
            <tr>
              {/* <th scope="row">3</th> */}
              <td colSpan="2">anonymous</td>
              <td>7009</td>
              <td>one time</td>
              <td>14th Febuary 2023</td>
            </tr>
          </tbody>
        </table>
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
