import { useNavigate } from "react-router-dom";

function CharityCard({ charity }) {
    const navigate = useNavigate();

    // Event Handlers
    function handleClick(event) {
        navigate(`/charity-details/${charity.id}`); // Navigate to the CharityDetails page for this charity
    }

    return(
        <div className='col card-group'>
            <div className='card w-100'>
              <img className='card-img-top max-h-64 object-cover' src={charity.img_url} alt='...' />

              <div className='card-body'>
                <h5 className='card-title font-bold text-lavender-200'>{charity.name}</h5>
                <div className="max-h-32 overflow-hidden">
                    <p className='card-text text-base text-left'>{charity.description.slice(0, 200)}...</p>
                </div>
                              
              </div>
              <div className="card-footer border-0 text-center bg-white my-4">
                  <button className='bg-lavender-200 rounded-3xl p-2.5 px-4 h-12 text-white text-base font-bold bottom-0 hover:bg-lavender-300' onClick={handleClick}>Donate Now</button>
                </div>
            </div>
        </div>
    )
}

export default CharityCard;