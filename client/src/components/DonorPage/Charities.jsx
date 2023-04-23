import { useEffect, useState } from "react";
import CharityCard from "./CharityCard";
import Pagination from "../Pagination";
import LoadingScreen from "../LoadingScreen";


const Charities = () => {
  // States
  const [charities, setCharities] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  // Pagination variables
  const itemsPerPage = 3; // Number of items per page
  const lastItemIndex = currentPage * itemsPerPage; // Calculate the index after the last item for the current page
  const firstItemIndex = lastItemIndex - itemsPerPage; // Calculate the index of the first item for the current page


  // Fetch charities from backend
  useEffect(() => {
    fetch("http://127.0.0.1:3000/charities")
    .then((response) => response.json())
    .then((charitiesData) => setCharities(charitiesData))
  }, [])

  // Filtering and Pagination of fetched data
  const charitiesToDisplay = charities.filter((charity) => charity.approved)
  const charitiesPerPage = charitiesToDisplay.slice(firstItemIndex, lastItemIndex)

  if(charities.length === 0) {
    return (<LoadingScreen />)
  }
  return (
    <div>
      {/* Hero Image */}
      <section>
        <div className="px-6 py-32 md:px-12 text-center lg:text-left h-xl flex items-center" style={{backgroundImage: `url(${charitiesToDisplay[0].img_url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="container mx-auto xl:px-32">
            <div className="flex items-center md:justify-end">

              {/* Text Card */}
              <div className="mb-12 p-12 lg:mb-0 lg:w-2/5 rounded-2xl bg-lavender-100/80 text-white text-left">
                <h1 className="mb-4 text-5xl text-white font-extrabold leading-tight">Help Mercy</h1>

                <p className="text-xl font-medium mb-6">Did you know that millions of girls like Mercy lack access to proper sanitary products, hindering their education and putting their health at risk?<br/>You can make a difference by supporting charities that work to improve these conditions and empower girls around the world. Join the movement today and help create a brighter future for all girls.</p>

                <p className="text-xl font-medium mb-6"><strong>Charity:</strong> {charitiesToDisplay[0].name}</p>

                <a className="bg-lavender-200 rounded-3xl p-2.5 px-4 h-12 text-white text-lg font-bold bottom-0 hover:bg-lavender-300" href="#charities">Donate Now!</a>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>

      {/* Header */}
      <div id="charities" className="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8">
        <h1 className="mb-2 sm:mt-4 md:mt-14 text-5xl text-lavender-400 font-extrabold leading-tight">Active Charities</h1>
        
        <p className="mb-16 mt-4 text-xl text-center font-medium "> Each of <span className="text-lavender-200 font-bold">our carefully selected charities</span> aim to promote equality improve health outcomes and create a more just and equitable world for all, through <span className="text-lavender-200 font-bold">proper sanitation and sanitary products</span>.</p>
      </div>

      {/* Charity Cards */}
      <div className='container'>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4'>
          {charitiesPerPage.map((charity) => <CharityCard key={charity.name} charity={charity}/>)}
        </div>  
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalItems={charitiesToDisplay.length} itemsPerPage={itemsPerPage} scrollTo={"charities"}/>
    </div>
  )};

export default Charities;


