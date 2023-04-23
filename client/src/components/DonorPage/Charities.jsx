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
      <section className='hero'>
        <div className='container1'>
          <div className='card'  style={{backgroundColor: 'rgba(136, 98, 219, 0.3)'}}>
            <h1>HELP MERCY</h1>
            <p className='text2'>
              Mercy lives in an area with poor sanitation and access to water.Sustainable sanitation solutions for poor communities has the potential to solve a range of social and environmental challenges<br></br>Charity:Elevating Sanitary Facilities
            </p>
            <button className='btn btn'style={{backgroundColor:'#9840D7',borderRadius:'20px',margin:'30px'}}>Donate Now!</button>
          </div>
        </div>
      </section>

      {/* Header */}
      <div className="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8">
        <h1 className="mb-2 sm:mt-4 md:mt-14 text-5xl text-lavender-400 font-extrabold leading-tight">Active Charities</h1>
        
        <p className="mb-16 mt-4 text-xl text-center font-medium "> Each of <span className="text-lavender-200 font-bold">our carefully selected charities</span> aim to promote equality improve health outcomes and create a more just and equitable world for all, through <span className="text-lavender-200 font-bold">proper sanitation and sanitary products</span>.</p>
      </div>

      {/* Charity Cards */}
      <div id="#charities" className='container'>
        <div className='row row-cols-md-3 row-cols-sm-1 g-4'>
          {charitiesPerPage.map((charity) => <CharityCard key={charity.name} charity={charity}/>)}
        </div>  
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalItems={charitiesToDisplay.length} itemsPerPage={itemsPerPage} scrollTo={'#charities'}/>
    </div>
  )};

export default Charities;


