
import './App.css';
import { useState, useEffect } from "react";
import { Routes,Route, useLocation } from 'react-router-dom';
import Popup from "../src/components/Popup";
import Footer from "../src/components/Footer";
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import LandingPage from '../src/components/DonorPage/LandingPage';
// import NavBar from '../src/components/NavBar'
import BeneficiaryStories from './components/BeneficiaryStories';
import BeneficiaryForm from "../src/components/CharityPage/BeneficiaryForm"
import NavBar from './components/NavBar';
import ContactUs from "./components/ContactUs"
import CharityEditForm from "./components/CharityPage/CharityEditForm"
import Charities from "./components/DonorPage/Charities"
import CharityDetails from "./components/DonorPage/CharityDetails"
import CharityDashboard from './components/CharityPage/CharityDashboard';
import AdministratorDashboard from "./components/Administrator/AdministratorDashboard"
import DonationForm from './components/DonorPage/DonationForm';
import AboutArea from './Aboutus';

function App() {
  // States
  const [currentUser, setCurrentUser] = useState({})
  const [popupVariables, setPopupVariables] = useState({
    visible: false,
    header: "",
    body: ""
  })

  const token = localStorage.getItem('token');  

  // Fetch logged in user
  useEffect(() => {
    const headers = {'Authorization': `Bearer ${token}`}
    fetch("http://127.0.0.1:3000/loggedin", {headers})
    .then((response) => response.json())
    .then((data) => setCurrentUser(data.current_user))
  }, [])




    // Get current location
    const location = useLocation();

    // Check if the current location is login or signup
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  
    // Conditionally render NavBar and Footer
    const renderNavBar = !isAuthPage && <NavBar/>;
    const renderFooter = !isAuthPage && <Footer/>;


  return (
    <div className="App">
    {renderNavBar}
      <Routes>
        
      <Route path='/' element={<LandingPage/>}/>

      <Route path='/home' element={<LandingPage/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/contactus" element={<ContactUs/>} />
      <Route exact path="/beneficiarystories" element={<BeneficiaryStories/>} />
      <Route exact path="/charitydetails" element={<CharityDetails/>} />
      <Route exact path="/charitydashboard" element={<CharityDashboard/>} />
      <Route exact path="/charityform" element={<CharityEditForm/>} />
      <Route exact path="/charityedit" element={<CharityEditForm/>} />
      <Route exact path="/charities" element={<Charities/>} />
      <Route exact path="/beneficiaryform" element={<BeneficiaryForm/>} />
      <Route exact path="/administratordashboard" element={<AdministratorDashboard popupVariables={popupVariables} setPopupVariables={setPopupVariables}/>} />
      <Route exact path="/donationform" element={<DonationForm/>} />
      <Route path="/charitydetails/:id" component={CharityDetails} />
      <Route exact path="/aboutus" element={<AboutArea/>} />
      {/* <Route exact path="/donationform" element={<DonationForm/>} /> */}
      

      </Routes>

      {renderFooter}

      {/* Popup Component can be used by any other component */}
      <Popup visible={popupVariables.visible} header={popupVariables.header} body={popupVariables.body} setPopupVariables={setPopupVariables}/>
    </div>
  );
}

export default App;