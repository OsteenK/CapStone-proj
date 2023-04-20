import React, { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import charitydetails from "./charitydetails.css";
import ReactPaginate from 'react-paginate';




const CharityDetails = () => {
  const PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [beneficiaryStories, setBeneficiaryStories] = useState([]);
  const token = localStorage.getItem("token");


  useEffect(() => {
  fetch("http://127.0.0.1:3000/beneficiaries", {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
  })
  .then(response => response.json())
  .then((data) => {
  console.log(data);
  setBeneficiaryStories(data);
  // Do something with the response
  })
  .catch(error => {
  console.log(error);
  });
}, [token]);

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
           <img src="your-image-url-here" alt="card-image" className="card-image" />
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
        
          <div class="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8">
                <h1 class="mb-2 sm:mt-4 md:mt-5 text-5xl text-white font-extrabold leading-tight">Changing the World</h1>
                
                <p class="mb-16 mt-4 text-xl text-center font-medium text-white"> Thousands of girls have benefited from Give Hope’s constant effort to improve menstrual care. Read on to learn about the real-life impact of <span class="text-lavender-200 font-bold">your donations</span> on the lives of these girls.</p>
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