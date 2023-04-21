import { useNavigate } from "react-router-dom";

function BeneficiaryCard( { story } ) {
    const navigate = useNavigate();

    // Event Handlers
    function handleClick(event) {
        navigate(`/charity-details/${story.charity_id}`); // Navigate to the CharityDetails page for this beneficiary
    }

    return(
        <div class="block rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)]">
            <img class="rounded-t-lg object-cover h-96 w-full" src={story.img_url} alt="beneficiary"/>            

            <div class="p-6 px-8">
                <h5 class="mb-2 py-2 text-2xl font-extrabold leading-tight text-lavender-200 text-center">
                    {`${story.name}, ${story.location}`}
                </h5>

                <p class="mb-4 text-base text-lavender-400">
                {story.description}
                </p>
                <p class="text-base text-lavender-400">
                    <strong class="">{story.name} received:</strong><br/>
                    {story.items}
                </p>

                <div class="text-center">
                    <button
                        type="button"
                        class="rounded-full my-4 px-6 pb-2 pt-2.5 text-lg font-extrabold bg-lavender-200 text-white hover:bg-[#6D0FA7] focus:outline-none focus:ring shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
                        onClick={handleClick}
                    >
                        Donate Now
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default BeneficiaryCard;