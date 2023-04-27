import React, { useEffect, useState } from 'react';
import Pagination from "../Pagination";
import Administratornavbar from './Administrator navbar';

function AdministratorDashboard({ popupVariables, setPopupVariables }) {
  // States
  const [currentPageTable1, setCurrentPageTable1] = useState(1);
  const [currentPageTable2, setCurrentPageTable2] = useState(1);

  // Pagination Variables
  const itemsPerPage = 4;
  const lastItemIndexTable1 = currentPageTable1 * itemsPerPage;
  const firstItemIndexTable1 = lastItemIndexTable1 - itemsPerPage;
  const lastItemIndexTable2 = currentPageTable2 * itemsPerPage;
  const firstItemIndexTable2 = lastItemIndexTable2 - itemsPerPage;

  // Backend defining 
  const [totalDonations, setTotalDonations] = useState(null);
  const [activeCharitiesCount, setActiveCharitiesCount] = useState(null);
  const [newApplicationsCount, setNewApplicationsCount] = useState(null);
  const [charities, setCharities] = useState([]);
  const [activeCharities, setActiveCharities] = useState([]);
  const [charityApplications, setCharityApplications] = useState([]);

  useEffect(() => {
    // Fetch total donations
    fetch('http://127.0.0.1:3000/donations/total')
      .then(response => response.json())
      .then(data => setTotalDonations(data.total))
      .catch(error => console.error(error));
    
    // Fetch active charities count
    fetch('http://127.0.0.1:3000/charities?approved=true')
      .then(response => response.json())
      .then(data => {
        setActiveCharities(data);
        setActiveCharitiesCount(data.length);
      })
      .catch(error => console.error(error));
    
    // Fetch new applications count
    fetch('http://127.0.0.1:3000/charities?approved=false')
      .then(response => response.json())
      .then(data => {
        setCharityApplications(data);
        setNewApplicationsCount(data.length);
      })
      .catch(error => console.error(error));
  }, []);

  // Define handleApproval function
  const handleApproval = (id) => {
    // Send PUT request to update charity approval status
    fetch(`/charities/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        approved: true,
      }),
    })
      .then(response => {
        if (response.ok) {
          // Update charities state with approved charity
          const updatedCharities = charities.map(charity => {
            if (charity.id === id) {
              charity.approved = true;
            }
            return charity;
          });
  
          // Create a new array of active charities
          const newActiveCharities = updatedCharities.filter(charity => charity.approved);
  
          // Update active charities state
          setActiveCharities(newActiveCharities);
  
          // Update charities state (remove approved charity)
          setCharities(updatedCharities.filter(charity => !charity.approved));
  
          // Update active and new applications counts
          setActiveCharitiesCount(newActiveCharities.length);
          setNewApplicationsCount(charityApplications.length - 1);
        }
      })
      .catch(error => console.error(error));
  };
  
  // Define handleRejection function
  const handleRejection = (id) => {
    // Send DELETE request to delete charity
    fetch(`http://127.0.0.1:3000/charities/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Remove rejected charity from charities state
          const updatedCharities = charities.filter(charity => charity.id !== id);
          setCharities(updatedCharities);
        }
      })
      .catch(error => console.error(error));
  };

  // Define handleDelete function
  const handleDelete = (id) => {
    // Send DELETE request to delete charity
    fetch(`http://127.0.0.1:3000/charities/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Remove deleted charity from charities state
          const updatedCharities = charities.filter(charity => charity.id !== id);
          setCharities(updatedCharities);
          // Update active charities count
          setActiveCharitiesCount(activeCharitiesCount - 1);
          }
          })
          .catch(error => console.error(error));
          };
          
          

  
  return (
    <div className='w-100 text-base'>
      <Administratornavbar/>
      {/* Stats Cards */}
      <div className="my-28 text-gray-800 text-center px-32">
        <div className="grid md:gap-x-8 md:grid-cols-1 lg:gap-x-12 lg:grid-cols-3">

          {/* First Card */}
          <div className="rounded-2xl shadow-lg h-full block bg-lavender-200 text-left">
            <div className="p-6 pt-10">
              <h1 className="text-7xl font-extrabold text-white my-2 mt-5">{activeCharities.reduce((acc, charity) => {return acc + charity.total_donations}, 0).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                })}</h1>
              <h3 className="text-4xl font-normal text-white mb-3">Raised</h3>
              {/* <a className='text-lavender-200'>More info</a> */}
            </div>
          </div>

          {/* Second Card */}
          <div className="rounded-2xl shadow-lg h-full block bg-lavender-400 text-left">
            <div className="p-6 pt-10">
              <h1 className="text-7xl font-extrabold text-white my-2 mt-5">{activeCharities.length}</h1>
              <h3 className="text-4xl font-normal text-white mb-3">Active Charities</h3>
              <a className='text-lavender-200 hover:text-lavender-100' href="#active-charities">More info {"->"}</a>
            </div>
          </div>

          {/* Third Card */}
          <div className="rounded-2xl shadow-lg h-full block bg-lavender-100 text-left">
            <div className="p-6 pt-10">
              <h1 className="text-7xl font-extrabold text-white my-2 mt-5">{charityApplications.length}</h1>
              <h3 className="text-4xl font-normal text-white mb-3">New Applications</h3>
              <a className='text-lavender-200 hover:text-lavender-500' href="#charity-applications">More info {"->"}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Charity Applications Table */}
      <div id="charity-applications" className='h-100 w-100 bg-lavender-100 px-32 py-10 text-left'>
        <h1 className='text-white text-4xl font-bold'>Charity Applications</h1>
        <p className='text-lavender-400'>These are the charities awaiting review and decision on whether the are approved or rejected.</p>
        
        <table className='bg-white w-full  text-lavender-400 text-base mb-4 border'>
          <thead className='border-b'>
            <th scope='col' className='px-6 py-4'>Charity Name</th>
            <th scope='col' className='px-6 py-4'>Email</th>
            <th scope='col' className='px-6 py-4'>Goal Amount</th>
            <th scope='col' className='px-6 py-4'>Description</th>
            <th scope='col' className='px-6 py-4'>Banner Image</th>
          </thead>

          <tbody className='divide-y'>
            {charityApplications.slice(firstItemIndexTable1, lastItemIndexTable1).map((charity) =>
              <tr>
                <td className='whitespace-nowrap px-6 py-4'>{charity.name}</td>
                <td className='whitespace-nowrap px-6 py-4'>{charity.email}</td>
                <td className='whitespace-nowrap px-6 py-4'>{charity.goal_amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                })}</td>

                <td><button type="button" className='whitespace-nowrap px-6 py-4 underline decoration-solid text-lavender-400 hover:text-lavender-200' onClick={() => setPopupVariables({visible: true, header: charity.name, body: charity.description})}>Click to read</button></td>


                <td><button type="button" className='whitespace-nowrap px-6 py-4 underline decoration-solid text-lavender-400 hover:text-lavender-200' onClick={() => window.open(charity.img_url, "_blank")}>Click to view</button></td>
                {/* Buttons */}
                <td>

                <button className='p-2 px-3 mr-2 rounded-full bg-lavender-400 hover:bg-lavender-500 text-white  text-base font-bold' onClick={() => handleApproval(charity.id)}>Approve</button>

                <button className='p-2 px-3 mr-2 rounded-full bg-lavender-200 hover:bg-lavender-300 text-white  text-base font-bold' onClick={() => handleRejection(charity.id)}>Reject</button>

                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination currentPage={currentPageTable1} setCurrentPage={setCurrentPageTable1} totalItems={charityApplications.length} itemsPerPage={itemsPerPage} scrollTo={"charity-applications"}/>
      </div>



      {/* Active Charities Table */}
      <div id="active-charities" className='h-100 w-100 bg-white px-32 py-10 text-left border'>
        <h1 className='text-lavender-400 text-4xl font-bold'>Active Charities</h1>
        <p className='text-lavender-400'>These are the charities that are currently active and collecting donations.</p>
        
        <table className='bg-white w-full  text-lavender-400 text-base mb-4 border'>
          <thead className='border-b rounded-t-lg'>
            <th scope='col' className='px-6 py-4'>Charity Name</th>
            <th scope='col' className='px-6 py-4'>Email</th>
            <th scope='col' className='px-6 py-4'>Total Donations</th>
            <th scope='col' className='px-6 py-4'>Goal Amount</th>
            <th scope='col' className='px-6 py-4'>Description</th>
            <th scope='col' className='px-6 py-4'>Banner Image</th>
          </thead>

          <tbody className='divide-y'>
            {activeCharities.slice(firstItemIndexTable2, lastItemIndexTable2).map((charity) =>
              <tr>
                <td className='whitespace-nowrap px-6 py-4'>{charity.name}</td>

                <td className='whitespace-nowrap px-6 py-4'>{charity.email}</td>

                <td className='whitespace-nowrap px-6 py-4'>{charity.total_donations.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                })}</td>

                <td className='whitespace-nowrap px-6 py-4'>{charity.goal_amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                })}</td>

                <td><button type="button" className='whitespace-nowrap px-6 py-4 underline decoration-solid text-lavender-400 hover:text-lavender-200' onClick={() => setPopupVariables({visible: true, header: charity.name, body: charity.description})}>Click to read</button></td>


                <td><button type="button" className='whitespace-nowrap px-6 py-4 underline decoration-solid text-lavender-400 hover:text-lavender-200' onClick={() => window.open(charity.img_url, "_blank")}>Click to view</button></td>
                {/* Buttons */}
                <td>
                  <button className='p-2 px-3 mr-2 rounded-full bg-lavender-200 hover:bg-lavender-300 text-white  text-base font-bold' onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination currentPage={currentPageTable2} setCurrentPage={setCurrentPageTable2} totalItems={activeCharities.length} itemsPerPage={itemsPerPage} scrollTo={"active-charities"}/>
      </div>

    </div>
    
  );
}

export default AdministratorDashboard;