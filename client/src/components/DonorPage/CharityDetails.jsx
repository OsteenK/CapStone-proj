import React, { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import charitydetails from "./charitydetails.css";
import ReactPaginate from 'react-paginate';




const CharityDetails = () => {
  const PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [beneficiaryStories, setBeneficiaryStories] = useState([]);
  const token = localStorage.getItem("token");


//   useEffect(() => {
//   fetch("http://127.0.0.1:3000/beneficiaries", {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json"
//   }
//   })
//   .then(response => response.json())
//   .then((data) => {
//   console.log(data);
//   setBeneficiaryStories(data);
//   // Do something with the response
//   })
//   .catch(error => {
//   console.log(error);
//   });
// }, [token]);

 const offset = currentPage * PER_PAGE;
  const beneficiaryStoriesToDisplay = beneficiaryStories.slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE);

  return (
    <div>
    <NavBar />
    <main>
      <section className="hero-section">
        <div className="hero-image"></div>
        
      </section>
      <section className="content-section">
        <div className="content-container">
         <div className="content-card">
           <img src="/home/rx/coding Repo/PHASE5/CapStone-proj/client/src/components/DonorPage/photo-1584731683340-6495e2e103e9.avif" alt="card-image" className="card-image" />
           <div className="card-info">
           <h3 className="card-title">Small Title</h3>
            <p className="card-text">Small Description</p>
           <div className="goal-bar">
            {/*Add your goal bar code here*/}
           </div>
           <button className="card-button">Observe Impact</button>
          </div>
        </div>
        <div className="content-text">
           <h2>Title</h2>
          <h3>Description</h3>
         <button className="content-button">Donate Now</button>
        </div>
       </div>
      </section>
        
      <section className="beneficiaryStoriesToDisplay-section">
        
          <div className="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8">
                <h1 className="mb-2 sm:mt-4 md:mt-5 text-5xl text-white font-extrabold leading-tight">Changing the World</h1>
                
                <p className="mb-16 mt-4 text-xl text-center font-medium text-white"> Thousands of girls have benefited from Give Hope’s constant effort to improve menstrual care. Read on to learn about the real-life impact of <span class="text-lavender-200 font-bold">your donations</span> on the lives of these girls.</p>
          </div>
          <div className="container">   
           <div className="row">
            {beneficiaryStoriesToDisplay.map((story) => (
             <><div className='col-md-4 mb-4'>
               <div className='beneficiaryStory-card'>
                <img className='beneficiaryStory-card-img-top' src='https://images.unsplash.com/photo-1509100297676-1a18b3842dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8MjQ1OTc1N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
               <div className='beneficiaryStory-card-body'>
                 <h5 className='beneficiaryStory-title'>Water To Schools</h5>
                 <p className='beneficiaryStory-text'>Our charity is working to provide a reliable source of clean water to a school in an under developed region,so students can focus...</p>
                 <button className='beneficiaryStory-button'>Donate Now</button>
               </div>
            </div>
            </div>
            <div className='col-md-4 mb-4'>
            <div className='beneficiaryStory-card'>
              <img className='beneficiaryStory-card-img-top' src='https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyNDU5NzU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
              <div className='beneficiaryStory-card-body'>
                <h5 className='beneficiaryStory-title'>PadUp 4 North Eastern</h5>
                <p className='beneficiaryStory-text'>This charity aims to provide 2000 girls living in the North Eastern region with sufficient sanitary towels to participate in the school year...</p>
                <button className='beneficiaryStory-button '>Donate Now</button>
              </div>
            </div>
            </div><div className='col-md-4 mb-4'>
            <div className='beneficiaryStory-card'>
              <img className='beneficiaryStory-card-img-top' src='https://images.unsplash.com/photo-1509100297676-1a18b3842dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8MjQ1OTc1N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
              <div className='beneficiaryStory-card-body'>
                <h5 className='beneficiaryStory-title'>Water To Schools</h5>
                <p className='beneficiaryStory-text'>Our charity is working to provide a reliable source of clean water to a school in an under developed region,so students can focus...</p>
                <button className='beneficiaryStory-button'>Donate Now</button>
              </div>
            </div>
          </div></>
        ))}
        </div>
        </div>
    
          {/* <div className="beneficiaryStories-cards">
             {beneficiaryStoriesToDisplay.map((story) => (
            <div className="beneficiaryStory-card">
             <h4 className="beneficiaryStory-title">{story.title}</h4>
             <p className="beneficiaryStory-text">{story.text}</p>
             <button className="beneficiaryStory-button">Donate Now</button>
            </div>
           ))}
          </div>
          <div className="beneficiaryStories-cards">
             {beneficiaryStoriesToDisplay.map((story) => (
            <div className="beneficiaryStory-card">
              <h4 className="beneficiaryStory-title">{story.title}</h4>
              <p className="beneficiaryStory-text">{story.text}</p>
              <button className="beneficiaryStory-button">Donate Now</button>
            </div>
           ))}
          </div>
         <div className="beneficiaryStories-cards">
             {beneficiaryStoriesToDisplay.map((story) => (
            <div className="beneficiaryStory-card">
              <h4 className="beneficiaryStory-title">{story.title}</h4>
              <p className="beneficiaryStory-text">{story.text}</p>
              <button className="beneficiaryStory-button">Donate Now</button>
            </div>
           ))}
          </div>
          <div className="beneficiaryStories-cards">
             {beneficiaryStoriesToDisplay.map((story) => (
            <div className="beneficiaryStory-card">
              <h4 className="beneficiaryStory-title">{story.title}</h4>
               <p className="beneficiaryStory-text">{story.text}</p>
               <button className="beneficiaryStory-button">Donate Now</button>
            </div>
           ))}
          </div> */}
        <ReactPaginate
          pageCount={Math.ceil(beneficiaryStories.length / PER_PAGE)}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="Prev"
          nextLabel="Next"
        />

      </section>
    </main>
    {/* <Footer /> */}
  </div>
    

 )
}

export default CharityDetails