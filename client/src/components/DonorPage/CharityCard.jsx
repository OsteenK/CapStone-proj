import { useNavigate } from "react-router-dom";

function CharityCard({ charity, cardData, progress }) {
    const navigate = useNavigate();

    // Event Handlers
    function handleClick(event) {
        navigate(`/charitydetails/${charity.id}`); // Navigate to the CharityDetails page for this charity
    }

    const num = (Math.round(((charity?.total_donations/charity.goal_amount)*100)/10))*10
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
        <div className="h-3 bg-lavender-200 rounded" style={{ width: `${charity ? (charity.total_donations / charity.goal_amount) * 100 : (cardData.raised / cardData.goal) * 100}%` }}></div>
        </div>
         <span className="text-medium font-bold">Raised <span className="text-lavender-200">{charity ? toLocaleString(charity.total_donations) : toLocaleString(cardData.raised)}</span> of {charity ? toLocaleString(charity.goal_amount) : toLocaleString(cardData.goal)}</span>
      </div>


    </div>
    <div className="card-footer border-0 text-center bg-white mb-4">
      <button className="bg-lavender-200 rounded-3xl p-2.5 px-4 h-12 text-white text-base font-bold bottom-0 hover:bg-lavender-300" 
      onClick={() => handleClick(charity.id)}>Donate Now</button>
    </div>
  </div>
</div>

//         <div>
//       {charity ? (
//         <div>
//           <h2 className="text-2xl font-bold mb-2">{charity.name}</h2>
//           <p className="text-gray-500 mb-2">{charity.mission}</p>
//           <div className="h-1 w-20 bg-blue-500 mb-3"></div>
//           <div className="flex items-center mb-2">
//             <div className="w-12 h-12 bg-cover bg-center rounded-full mr-3" style={{ backgroundImage: `url(${charity.logo})` }}></div>
//             <div>
//               <p className="text-lg font-medium">{charity.cause}</p>
//               <p className="text-gray-500">{charity.location}</p>
//             </div>
//           </div>
//           <p className="text-gray-800">{charity.description}</p>
//           <div className="mt-4 flex justify-between">
//             <div className="text-xs font-bold uppercase text-gray-500">Raised</div>
//             <div className="text-xs font-bold uppercase text-gray-500">Goal</div>
//           </div>
//           <div className="mt-2 flex justify-between">
//             <div className="text-sm font-bold text-gray-800">${charity.raised}</div>
//             <div className="text-sm font-bold text-gray-800">${charity.goal}</div>
//           </div>
//           <div className="mt-2">
//             <div className="relative pt-1">
//               <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
//                 <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800">{cardData.name}</h3>
//               <p className="text-gray-500 mb-2">{cardData.mission}</p>
//               <div className="h-1 w-20 bg-blue-500 mb-3"></div>
//               <div className="flex items-center mb-2">
//                 <div className="w-12 h-12 bg-cover bg-center rounded-full mr-3" style={{ backgroundImage: `url(${cardData.logo})` }}></div>
//                 <div>
//                   <p className="text-lg font-medium">{cardData.cause}</p>
//                   <p className="text-gray-500">{cardData.location}</p>
//                 </div>
// </div>
// <p className="text-gray-800">{cardData.description}</p>
// <div className="mt-4 flex justify-between">
// <div className="text-xs font-bold uppercase text-gray-500">Raised</div>
// <div className="text-xs font-bold uppercase text-gray-500">Goal</div>
// </div>
// <div className="mt-2 flex justify-between">
// <div className="text-sm font-bold text-gray-800">${cardData.raised}</div>
// <div className="text-sm font-bold text-gray-800">${cardData.goal}</div>
// </div>
// <div className="mt-2">
// <div className="relative pt-1">
// <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
// <div style={{ width: `${progress}% `}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// )}
//        </div>
    )
}

export default CharityCard;