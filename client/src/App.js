import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import LandingPage from '../src/components/DonorPage/LandingPage';
import CharityDashboard from '../src/components/CharityPage/CharityDashboard'
import NavBar from '../src/components/NavBar'
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'
import CharityDetailsPage from './components/DonorPage/CharityDetails';



function App() {
  
  return (
    <div className="App">

     
      <Routes>
        
      <Route path='/' element={<LandingPage/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/contactus" element={<ContactUs/>} />

      <Route exact path="/charitydashboard" element={<CharityDashboard/>} />
      <Route exact path="/charitydetailspage" element={<CharityDetailsPage/>} />
      

      </Routes>
      {/* <NavBar/>
      <Footer/> */}
    </div>
   
  );
}


export default App;