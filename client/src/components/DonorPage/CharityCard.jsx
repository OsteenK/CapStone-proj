import { useNavigate } from "react-router-dom";

function CharityCard({ charity, cardData, progress }) {
    const navigate = useNavigate();

    // Event Handlers
    function handleClick(event) {
        navigate(`/charitydetails/${charity.id}`); // Navigate to the CharityDetails page for this charity
    }

    const num = (Math.round(((charity?.total_donated/charity.goal_amount)*100)/10))*10
    console.log(num)
    const toLocaleString = (value) => {
        return value?.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
      };


    return(
        <div className="col card-group">
      <div className="card w-100">
        <img className="card-img-top max-h-64 object-cover" src={charity ? charity.img_url : cardData.logo} alt="..." />

        <div className="card-body">
          <h5 className="card-title font-bold text-lavender-200">{charity ? charity.name : cardData.name}</h5>
          <div className="max-h-32 overflow-hidden">
            <p className="card-text text-base text-left">{charity ? charity.description.slice(0, 200) : cardData.description.slice(0, 200)}...</p>
          </div>

          {/* Progress Bar */}
          <div>
          <div className="h-3 w-full bg-lavender-100 rounded mt-4 mx-auto">
            <div className="h-3 bg-lavender-200 rounded" style={{ width: `${charity ? (charity.total_donated / charity.goal_amount) * 100 : (cardData.raised / cardData.goal) * 100}%` }}></div>
            </div>
            <span className="text-medium font-bold">Raised <span className="text-lavender-200">{charity ? toLocaleString(charity.total_donated) : toLocaleString(cardData.raised)}</span> of {charity ? toLocaleString(charity.goal_amount) : toLocaleString(cardData.goal)}</span>
          </div>


        </div>
        <div className="card-footer border-0 text-center bg-white mb-4">
          <button className="bg-lavender-200 rounded-3xl p-2.5 px-4 h-12 text-white text-base font-bold bottom-0 hover:bg-lavender-300" 
          onClick={() => handleClick(charity.id)}>Donate Now</button>
        </div>
      </div>
    </div>
    )
}

export default CharityCard;