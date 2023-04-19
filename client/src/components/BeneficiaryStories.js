import BeneficiaryCard from "./BeneficiaryCard";

function BeneficiaryStories(){

    return(
        <div class="w-screen mx-0 p-4 bg-lavender-100">
            {/* Page Heading */}
            <div class="sm:w-full lg:w-1/2 sm:mx-1 md:mx-auto sm:px-0 md:px-8">
                <h1 class="mb-2 sm:mt-4 md:mt-5 text-5xl text-white font-extrabold leading-tight">Changing the World</h1>
                
                <p class="mb-16 mt-4 text-xl text-center font-medium text-white"> Thousands of girls have benefited from Give Hope’s constant effort to improve menstrual care. Read on to learn about the real-life impact of <span class="text-lavender-200 font-bold">your donations</span> on the lives of these girls.</p>
            </div>

            {/* Card Grid */}
            <div class="container grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
                <BeneficiaryCard />
                <BeneficiaryCard />
            </div>
        </div>
        
    )
}

export default BeneficiaryStories;