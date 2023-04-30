import React, { useState } from 'react';
import Pagination from "../Pagination";
import LoadingScreen from '../LoadingScreen';
import Swal from "sweetalert";

function AdministratorDashboard({ currentUser, popupVariables, setPopupVariables }) {
  // States
  const [currentPageTable1, setCurrentPageTable1] = useState(1);
  const [currentPageTable2, setCurrentPageTable2] = useState(1);

  // Pagination Variables
  const itemsPerPage = 4;
  const lastItemIndexTable1 = currentPageTable1 * itemsPerPage;
  const firstItemIndexTable1 = lastItemIndexTable1 - itemsPerPage;
  const lastItemIndexTable2 = currentPageTable2 * itemsPerPage;
  const firstItemIndexTable2 = lastItemIndexTable2 - itemsPerPage;

  // Event Handlers
  function handleApproval(e){
    // Make request to backend to approve the charity
    // Send PUT request to update charity approval status
    fetch(`http://localhost:3000/charities/approve/${e.target.id}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({approved: true})
    })
    .then(response => {
      if (response.ok){
        Swal({
          title: "Successful approval!",
          text: "The charity has been approved and is now active.",
          icon: "success",
          button: "OK",
        })
        window.location.reload();
      }
    })
    .catch(error => {
      console.error(error);
      Swal({
        title: "Approval Failed",
        text: `${error}`,
        icon: "error",
        button: "OK",
      })
    })
  }

  function handleRejection(e){
    // Make request to backend to reject the application
    // Send DELETE request to delete the charity from the backend
    fetch(`http://localhost:3000/charities/reject/${e.target.id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (response.ok){
        Swal({
          title: "Successful rejection!",
          text: "The charity has been rejected.",
          icon: "success",
          button: "OK",
        })
        window.location.reload();
      }
    })
    .catch(error => {
      console.error(error);
      Swal({
        title: "Rejection Failed",
        text: `${error}`,
        icon: "error",
        button: "OK",
      })
    })
  }

  function handleDelete(e){
    console.log(e.target)
    // Make request to backend to delete the charity
  }


  if(currentUser === undefined || currentUser.charities === undefined) {
    return (
      <div className='text-center'>
        <LoadingScreen />
      </div>
    )
  } else {
    // Array to hold the active charities
    const activeCharities = currentUser.charities.filter((charity) => charity.approved)
    // Array to hold the charity applications
    const charityApplications = currentUser.charities.filter((charity) => !charity.approved)

    return (
      <div className='w-100 text-base'>
        {/* Stats Cards */}
        <div className="my-28 text-gray-800 text-center px-32">
          <div className="grid sm:gap-y-4 md:gap-x-8 md:grid-cols-1 lg:gap-x-12 lg:grid-cols-3">
  
            {/* First Card */}
            <div className="rounded-2xl shadow-lg h-full block bg-lavender-200 text-left">
              <div className="p-6 pt-10">
                <h1 className="text-7xl font-extrabold text-white my-2 mt-5">{activeCharities.reduce((acc, charity) => {return acc + charity.total_donated}, 0).toLocaleString("en-US", {
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
          
          <div className='overflow-x-scroll'>
            <table className='bg-white w-full text-lavender-400 text-base mb-4 border'>
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
                    <td className='md:flex md:items-center md:pt-3'>
                      <button id={`${charity.id}`} className='p-2 px-3 mr-2 rounded-full bg-lavender-400 hover:bg-lavender-500 text-white  text-base font-bold' onClick={handleApproval}>Approve</button>
    
                      <button id={`${charity.id}`} className='p-2 px-3 mr-2 rounded-full bg-lavender-200 hover:bg-lavender-300 text-white  text-base font-bold' onClick={handleRejection}>Reject</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
  
          <Pagination currentPage={currentPageTable1} setCurrentPage={setCurrentPageTable1} totalItems={charityApplications.length} itemsPerPage={itemsPerPage} scrollTo={"charity-applications"}/>
        </div>
  
  
  
        {/* Active Charities Table */}
        <div id="active-charities" className='h-100 w-100 bg-white px-32 py-10 text-left border'>
          <h1 className='text-lavender-400 text-4xl font-bold'>Active Charities</h1>
          <p className='text-lavender-400'>These are the charities that are currently active and collecting donations.</p>
          
          <div className='overflow-x-scroll'>
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
    
                    <td className='whitespace-nowrap px-6 py-4'>{charity.total_donated.toLocaleString("en-US", {
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
                      <button id={`${charity.id}`} className='p-2 px-3 mr-2 rounded-full bg-lavender-200 hover:bg-lavender-300 text-white  text-base font-bold' onClick={handleDelete}>Delete</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <Pagination currentPage={currentPageTable2} setCurrentPage={setCurrentPageTable2} totalItems={activeCharities.length} itemsPerPage={itemsPerPage} scrollTo={"active-charities"}/>
        </div>
  
      </div>
    );
  }
  
}

export default AdministratorDashboard;