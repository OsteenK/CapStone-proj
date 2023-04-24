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

  // Set current user - should be replaced with current user from App.js
  const currentUser = {
        "id": 1,
        "first_name": "Give",
        "last_name": "Hope",
        "email": "givehopecharities@gmail.com",
        "password_digest": "$2a$12$T.498GD9o/RilS6l21DPhuUgmpmbpWCuu/pSThvsPEhuEI4i4CF.G",
        "created_at": "2023-04-21T22:07:55.798Z",
        "updated_at": "2023-04-21T22:07:55.798Z",
        "charities": [
            {
                "id": 1,
                "name": "PadUp 4 North Eastern",
                "email": "joannaoluoch@gmail.com",
                "password_digest": "$2a$12$AIAIijEoAlniFGXWn1XfyOkGynMZ7.0KoEneoZ1C5xz8lu3hGgCYe",
                "description": "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
                "img_url": "https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
                "goal_amount": 5000,
                "total_donations": 3857,
                "administrator_id": 1,
                "approved": true,
                "created_at": "2023-04-21T22:07:56.971Z",
                "updated_at": "2023-04-21T22:07:56.971Z"
            },
            {
                "id": 2,
                "name": "Water To Schools",
                "email": "watertoschools@gmail.com",
                "password_digest": "$2a$12$LklRDjAGiKZvUnQA8RAqZOlLUidSNkauR1FDhm7r35QT19CraoSNO",
                "description": "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
                "img_url": "https://images.unsplash.com/photo-1544476301-66914d9e95aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
                "goal_amount": 8000,
                "total_donations": 6542,
                "administrator_id": 1,
                "approved": true,
                "created_at": "2023-04-21T22:07:57.256Z",
                "updated_at": "2023-04-21T22:07:57.256Z"
            },
            {
                "id": 3,
                "name": "Elevating Sanitary Facilities",
                "email": "sanitary@gmail.com",
                "password_digest": "$2a$12$9wFoaFeM03vi8DRr9dKncurVme3igQuHr/0whKrvl4Bc5joKqTj2u",
                "description": "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
                "img_url": "https://images.unsplash.com/photo-1584012961499-2147c0b3cf0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "goal_amount": 5000,
                "total_donations": 3857,
                "administrator_id": 1,
                "approved": false,
                "created_at": "2023-04-21T22:07:57.544Z",
                "updated_at": "2023-04-21T22:07:57.544Z"
            },
            {
                "id": 4,
                "name": "Zana Africa Foundation",
                "email": "zanafrica@gmail.com",
                "password_digest": "$2a$12$FB9olcLTH4kqszaP6n62w.qwRWctBkoQTGObMFqvMS.yvBJvWKLqm",
                "description": " Zana Africa Foundation is a non-profit organization working to improve menstrual health and education for girls in Kenya. Our goal is to provide girls with the knowledge and resources they need to manage their periods with dignity and without shame. We provide menstrual health education and distribute menstrual pads to girls in need, and we also work to break down the cultural barriers and stigmas surrounding menstruation. Our goal is to reach 1 million girls in Kenya by 2025.",
                "img_url": "https://images.unsplash.com/photo-1444664361762-afba083a4d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                "goal_amount": 7000,
                "total_donations": 6002,
                "administrator_id": 1,
                "approved": true,
                "created_at": "2023-04-21T22:07:57.875Z",
                "updated_at": "2023-04-21T22:07:57.875Z"
            },
            {
                "id": 5,
                "name": "AfriPads",
                "email": "afripads@gmail.com",
                "password_digest": "$2a$12$b5zl5PaSd/plxFXXAg5A7.xhnX5I/N7pWa7BEOidXSkxDk.rxunna",
                "description": "Afripads is a social enterprise that produces and distributes reusable menstrual pads in Kenya. Our goal is to provide girls with a sustainable and affordable solution for menstrual care that allows them to stay in school and participate fully in their communities. We also work to break down the cultural barriers and stigmas surrounding menstruation, and we provide menstrual health education to girls and boys. Our goal is to provide 10 million girls in Kenya with reusable menstrual pads by 2025.",
                "img_url": "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
                "goal_amount": 10000,
                "total_donations": 4682,
                "administrator_id": 1,
                "approved": true,
                "created_at": "2023-04-21T22:07:58.162Z",
                "updated_at": "2023-04-21T22:07:58.162Z"
            },
            {
                "id": 6,
                "name": "Wash United Kenya",
                "email": "washunitedke@gmail.com",
                "password_digest": "$2a$12$LybTOGsVipl69IJRzANHe.DFQIk1cJLQOjCiW6lNijUBMRCV6U.2a",
                "description": "Wash United Kenya is a non-profit organization that uses the power of sports to promote good hygiene and sanitation practices. We believe that everyone has the right to access clean water and sanitation facilities, and that promoting good hygiene practices is critical for the health and well-being of communities. Through our innovative programs, we use sports to engage and educate children and youth on good hygiene practices, including menstrual hygiene management. Our goal is to reach 5 million children and youth in Kenya by 2025.",
                "img_url": "https://images.unsplash.com/photo-1629260606767-d6468a9a2ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "goal_amount": 120000,
                "total_donations": 19670,
                "administrator_id": 1,
                "approved": true,
                "created_at": "2023-04-21T22:07:58.455Z",
                "updated_at": "2023-04-21T22:07:58.455Z"
            },
            {
                "id": 7,
                "name": "Sanergy",
                "email": "sanergy@gmail.com",
                "password_digest": "$2a$12$z1ga0u/lpbJsSZIPp.xTouQM/8N7uHmTyG3DqCTLpHOPoEzsiAH6.",
                "description": "Description: Sanergy is a social enterprise that provides sustainable sanitation solutions in urban slums in Kenya. We believe that everyone deserves access to safe and dignified sanitation facilities, and that improving access to sanitation can help improve health outcomes and create economic opportunities. We provide affordable and accessible sanitation facilities to communities in need, and we also work to create jobs and promote entrepreneurship through our innovative waste management system. Our goal is to provide access to safe and dignified sanitation facilities to 1 million people in Kenya by 2030.",
                "img_url": "https://images.unsplash.com/photo-1509099896299-af46ad97ff57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
                "goal_amount": 200000,
                "total_donations": 174390,
                "administrator_id": 1,
                "approved": true,
                "created_at": "2023-04-21T22:07:58.764Z",
                "updated_at": "2023-04-21T22:07:58.764Z"
            },
            {
                "id": 8,
                "name": "Jacaranda Health",
                "email": "jakarandahealth@gmail.com",
                "password_digest": "$2a$12$9LIK9t8Aaefchb0kvM0Sb.KLYwM8B/lRDHz0hhKCLNx1JFAOxpAg6",
                "description": " Jacaranda Health is a non-profit organization that provides maternal and child health services in Kenya. We believe that access to quality healthcare is critical for the health and well-being of communities, and we also recognize the importance of menstrual health and hygiene management for girls and women. We provide menstrual health education and distribute menstrual pads to our clients, and we also work to promote good hygiene practices in our communities. Our goal is to provide comprehensive maternal and child health services to 1 million people in Kenya by 2030.",
                "img_url": "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
                "goal_amount": 10000,
                "total_donations": 4000,
                "administrator_id": 1,
                "approved": false,
                "created_at": "2023-04-21T22:07:59.079Z",
                "updated_at": "2023-04-21T22:07:59.079Z"
            }
        ]
  }

  // Event Handlers
  function handleApproval(e){
    console.log(e.target)
    // Make request to backend to approve teh charity
  }

  function handleRejection(e){
    console.log(e.target)
    // Make request to backend to reject the application
  }

  function handleDelete(e){
    console.log(e.target)
    // Make request to backend to delete the charity
  }
  
  // Array to hold the active charities
  const activeCharities = currentUser.charities.filter((charity) => charity.approved)
  // Array to hold the charity applications
  const charityApplications = currentUser.charities.filter((charity) => !charity.approved)

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

                  <button className='p-2 px-3 mr-2 rounded-full bg-lavender-400 hover:bg-lavender-500 text-white  text-base font-bold' onClick={handleApproval}>Approve</button>

                  <button className='p-2 px-3 mr-2 rounded-full bg-lavender-200 hover:bg-lavender-300 text-white  text-base font-bold' onClick={handleRejection}>Reject</button>
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
