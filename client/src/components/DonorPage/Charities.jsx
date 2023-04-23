import NavBar from "../NavBar";
import "./Charities.css";
import { useState, useEffect } from "react";


const Charities = () => {
  const [charities, setCharities] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/charities`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => 
      setCharities(data)
    )
    .catch((error) => {
      console.log(error);
    });
  }, [token]);

  return (
   <div>
      <NavBar/>
       
      <section className='hero'>
        <div className='container1'>
        {charities?.map((charity) => (
        <div  
        key={charity.id}
        className="card" 
        style={{backgroundColor: 'rgba(136, 98, 219, 0.3)'}}>
        <h1>{charity.title}</h1>
        <p className='text2'>
        {charity.description}
        </p>
        <button className='btn btn'style={{backgroundColor:'#9840D7',borderRadius:'20px',margin:'30px'}}>Donate Now!</button>
        </div>
        ))}
        </div>
       </section>
     
        
       <div className="hero2">
        <h1>Active Charities</h1>
        <p className="text1">
          Each of our carefully selected charities aim to promote equality
          <br />
          improve health outcomes and create a more just and equitable world
          for all,through proper sanitation and sanitary products.
        </p>
      </div>
        <div className='container'>
       <div className='row'>
       {charities?.map((charity) => (
       <div className='col-md-4'>
       <div className='card'>
        <img className='card-img-top' src={charity.image} alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{charity.title}</h5>
          <p className='card-text'>{charity.description}</p>
          <button className='btn btn-primary '>Donate Now</button>
        </div>
      </div>
     </div>
       ))}
       </div>
      </div>
      <div className='container'>
       <div className='row'>
       {charities?.map((charity) => (
       <div className='col-md-4'>
       <div className='card'>
        <img className='card-img-top' src={charity.image} alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{charity.title}</h5>
          <p className='card-text'>{charity.description}</p>
          <button className='btn btn-primary '>Donate Now</button>
        </div>
      </div>
     </div>
       ))}
       </div>
      </div>
        <div className='container'>
       <div className='row'>
       {charities?.map((charity) => (
       <div className='col-md-4'>
       <div className='card'>
        <img className='card-img-top' src={charity.image} alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{charity.title}</h5>
          <p className='card-text'>{charity.description}</p>
          <button className='btn btn-primary '>Donate Now</button>
        </div>
      </div>
     </div>
       ))}
       </div>
      </div>
        <div className='container'>
       <div className='row'>
       {charities?.map((charity) => (
       <div className='col-md-4'>
       <div className='card'>
        <img className='card-img-top' src={charity.image} alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{charity.title}</h5>
          <p className='card-text'>{charity.description}</p>
          <button className='btn btn-primary '>Donate Now</button>
        </div>
      </div>
     </div>
       ))}
       </div>
      </div>
    
      
      <div class="button-container">
          <button class="bttn"> 1</button>
             <button class="bttn"> 2</button>
               <button class="bttn"> 3</button>
      </div>
     </div>
    

    
   
   
  
 )
  };


export default Charities;


