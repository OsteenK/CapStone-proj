import { useState, useEffect } from "react";
import BeneficiaryCard from "./BeneficiaryCard";
import Pagination from "./Pagination";
import NavBar from "./NavBar";
import Footer from "./Footer";

function BeneficiaryStories(){
    // States
    const [stories, setStories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination variables
    const itemsPerPage = 2; // Number of items per page
    const lastItemIndex = currentPage * itemsPerPage; // Calculate the index after the last item for the current page
    const firstItemIndex = lastItemIndex - itemsPerPage; // Calculate the index of the first item for the current page

    // Fetch beneficiary stories
    useEffect(() =>{
        fetch("http://localhost:3000/beneficiaries")
        .then(response => response.json())
        .then(data => setStories(data))
    }, [])

    // Pagination of fetched data
    const storiesPerPage = stories.slice(firstItemIndex, lastItemIndex);
    
    if(storiesPerPage.length === 0){
        return(<h1 class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"></h1>)
    }else{
        return(
            <div class="w-screen mx-0 p-4 bg-lavender-100">
                <NavBar/>
                {/* Page Heading */}
                <div class="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8 text-center">
                    <h1 class="mb-2 sm:mt-4 md:mt-5 text-5xl text-white font-extrabold leading-tight">Changing the World</h1>
                    
                    <p class="mb-16 mt-4 text-xl text-center font-medium text-white"> Thousands of girls have benefited from Give Hope’s constant effort to improve menstrual care. Read on to learn about the real-life impact of <span class="text-lavender-200 font-bold">your donations</span> on the lives of these girls.</p>
                </div>

                {/* Card Grid */}
                <div class="mx-20 grid md:gap-8 lg:gap-16 lg:grid-cols-2 md:grid-cols-1">
                    {storiesPerPage.map(story => <BeneficiaryCard key={story.id} story={story} />)}
                </div>

                {/* Pagination Buttons */}
                <Pagination totalItems={stories.length} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage}/>
                <Footer/>
            </div>
        )
    }
}

export default BeneficiaryStories;