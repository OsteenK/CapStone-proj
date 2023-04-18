import NavBar from "../NavBar";
import "./Charities.css";


const Charities = () => {
  

  return (
   <div>
      <NavBar/>
       
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
     
        
        <div className='hero2'>
        <h1>Active Charities</h1>
        <p className='text1'>Each of our carefully selected charities aim to promote equality<br></br>improve health outcomes and create a more just and equitable world for all,through proper sanitation and sanitary products.</p>
        </div>
        <div className='container'>
       <div className='row'>
       <div className='col-md-4'>
       <div className='card'>
        <img className='card-img-top' src='https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyNDU5NzU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>PadUp 4 North Eastern</h5>
          <p className='card-text'>This charity aims to provide 2000 girls living in the North Eastern region with sufficient sanitary towels to participate in the school year...</p>
          <button className='btn btn-primary '>Donate Now</button>
        </div>
      </div>
     </div>
     <div className='col-md-4'>
      <div className='card'>
        <img className='card-img-top' src='https://images.unsplash.com/photo-1509100297676-1a18b3842dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8MjQ1OTc1N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Water To Schools</h5>
          <p className='card-text'>Our charity is working to provide a reliable source of clean water to a school in an under developed region,so students can focus...</p>
          <button className='btn btn-primary'>Donate Now</button>
        </div>
      </div>
      </div>
      <div className='col-md-4'>
      <div className='card'>
        <img className='card-img-top' src='https://images.unsplash.com/photo-1584012961499-2147c0b3cf0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyNDU5NzU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Elevating Sanitary Facilities</h5>
          <p className='card-text'>Our charity is dedicated to improving the health and well being of communities by implementing UNICEF guidelines to provide safe...</p>
          <button className='btn btn-primary'>Donate Now</button>
        </div>
      </div>
     </div>
     <div className='col-md-4'>
      <div className='card'>
        <img className='card-img-top' src='https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyNDU5NzU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>PadUp 4 North Eastern</h5>
          <p className='card-text'>This charity aims to provide 2000 girls living in the North Eastern region with sufficient sanitary towels to participate in the school year...</p>
          <button className='btn btn-primary '>Donate Now</button>
        </div>
      </div>
      </div>
      <div className='col-md-4'>
      <div className='card'>
        <img className='card-img-top' src='https://images.unsplash.com/photo-1509100297676-1a18b3842dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8MjQ1OTc1N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Water To Schools</h5>
          <p className='card-text'>Our charity is working to provide a reliable source of clean water to a school in an under developed region,so students can focus...</p>
          <button className='btn btn-primary'>Donate Now</button>
        </div>
      </div>
     </div>
     <div className='col-md-4'>
      <div className='card'>
        <img className='card-img-top' src='https://images.unsplash.com/photo-1584012961499-2147c0b3cf0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyNDU5NzU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Elevating Sanitary Facilities</h5>
          <p className='card-text'>Our charity is dedicated to improving the health and well being of communities by implementing UNICEF guidelines to provide safe...</p>
          <button className='btn btn-primary'>Donate Now</button>
        </div>
      </div>
      </div>
      <div class="button-container">
          <button class="bttn"> 1</button>
             <button class="bttn"> 2</button>
               <button class="bttn"> 3</button>
      </div>
     </div>
     </div>

    
   
   </div>
  
 )
  };


export default Charities;


