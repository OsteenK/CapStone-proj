import React, { useEffect, useState } from "react";
import CharityCard from "./CharityCard";
import LoadingScreen from "../LoadingScreen";
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaGlobeAfrica } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";

const LandingPage = () => {
  const [currentUser, sestCurrentUser] = useState({});
  const [charities, setCharities] = useState([]);

 // Fetch charities from backend
 useEffect(() => {
  fetch("http://127.0.0.1:3000/charities")
  .then((response) => response.json())
  .then((charitiesData) => setCharities(charitiesData))
}, [])

  const charitiesToDisplay = charities.filter((charity) => charity.approved).slice(0, 3)

  if(charities.length === 0) {
    return (<LoadingScreen />)
  }

  return (
    <div> 
      <main>
      <section className="px-6 py-32 md:px-12 text-center lg:text-left h-xl flex items-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1567057419865-38d8cff1c2b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="container mx-auto xl:px-32">
            <div className="flex items-center md:justify-start">
              <div className="mb-12 p-12 lg:md-0 lg:w-2/5 rounded-2xl bg-lavender-100/80 text-white text-left">
                <h1 className="mb-4 text-5xl text-white font-extrabold leading-tight">Put a smile on her face</h1>
                <p className="text-xl font-medium mb-6">
                  Millions of girls around the world miss school and suffer from shame and stigma because they don't have access to menstrual products. This affects their education, health, and overall well-being. By donating to our charities, you can help empower girls with dignity and confidence, and ensure they have the resources they need to succeed.
                </p>
                <Link to="/charities" className="bg-lavender-200 rounded-3xl p-2.5 px-4 h-12 text-white text-lg font-bold bottom-0 hover:bg-lavender-300 no-underline">Donate Now</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 pt-8 text-center">
          <div className="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8 text-center">
            <h1 className="mb-2 sm:mt-4 md:mt-14 text-5xl text-lavender-400 font-extrabold leading-tight">OUR MISSION</h1>

            <p className="mb-16 mt-4 text-lavender-400 text-2xl text-center font-medium">Empower girls with  <span className="text-lavender-200 text-uppercase">dignity</span> and <span className="text-lavender-200 text-uppercase">confidence</span>.</p>
          </div>

          <section className="container">
            <div className="row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 g-4">

              <div className="col card-group">
                <div className="card w-100 text-center">
                  <div className="py-12 w-50 h-50 mx-auto"><GiBookmarklet className="w-full h-full text-lavender-400"/></div>

                  <div className="card-body">
                    <h3>Provide Education</h3>
                    <p className="md:px-8 lg:px-0">
                      Empowering girls around the world with access to menstrual hygiene products, so they can stay in school, participate in their communities, and achieve their full potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col card-group">
                <div className="card w-100 text-center">
                  <div className="py-8 w-50 h-50 mx-auto"><FaHandHoldingHeart className="w-full h-full text-lavender-400"/></div>

                  <div className="card-body">
                    <h3>Support Health</h3>
                    <p className="md:px-8 lg:px-0">
                      Providing every girl with access to basic sanitary products, and breaking down the barriers that prevent girls from achieving their dreams.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col card-group">
                <div className="card w-100 text-center">
                  <div className="py-12 w-50 h-50 mx-auto"><FaGlobeAfrica className="w-full h-full text-lavender-400"/></div>

                  <div className="card-body">
                    <h3>Fight Poverty</h3>
                    <p className="md:px-8 lg:px-0">
                      Promoting equality, improving health outcomes and creating a more just and equitable world for all by providing menstrual hygiene products to girls in need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <button className="bg-lavender-200 text-white font-extrabold mt-12 rounded-lg hover:bg-lavender-300 no-underline p-4">JOIN THE FIGHT!</button>
        </section>
        
        <section className="bg-lavender-100 p-4 text-center">
          <div className="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8">
            <h1 className="mb-2 sm:mt-4 md:mt-14 text-5xl text-white font-extrabold leading-tight">OUR CAUSES</h1>
            
            <p className="mb-16 mt-4 text-xl text-center font-bold text-white">Your donations make a difference. <a className="text-lavender-200 hover:text-lavender-300" href="/charities">See our charities {"->"}</a></p>
          </div>

          <div className='container'>
            {/* Charity Cards */}
            <div className='container'>
              <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4'>
                {charitiesToDisplay.map((charity) => <CharityCard key={charity.name} charity={charity}/>)}
              </div>  
            </div>
          </div>
        </section>
      </main>
    </div> 
  );
};

export default LandingPage;
