
 import './App.css';
import { useState } from "react";
import { Routes,Route } from 'react-router-dom';
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


function App() {
  const [popupVariables, setPopupVariables] = useState({
    visible: false,
    header: "",
    body: ""
  })

  return (
    <div className="App">
      {/* <NavBar/> */}
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
      
      {/* <Route exact path="/donationform" element={<DonationForm/>} /> */}
      

      </Routes>

      <Footer />

      {/* Popup Component can be used by any other component */}
      <Popup visible={popupVariables.visible} header={popupVariables.header} body={popupVariables.body} setPopupVariables={setPopupVariables}/>
    </div>
  );
}

export default App;