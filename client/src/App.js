import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import LandingPage from '../src/components/DonorPage/LandingPage';
import CharityForm from '../src/components/CharityPage/CharityEditForm';
import Charities from '../src/components/CharityPage/Charities';
import CharityDashboard from '../src/components/CharityPage/CharityDashboard';
import ContactUs from './components/ContactUs'
import BeneficiaryStories from './components/BeneficiaryStories';
import BeneficiaryForm from "../src/components/CharityPage/BeneficiaryForm"
import Charities from '../src/components/CharityPage/Charities'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/charities" element={<Charities/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/beneficiary-stories" element={<BeneficiaryStories/>} />

        <Route exact path="/charitydashboard" element={<CharityDashboard/>} />

        <Route exact path="/charityform" element={<CharityForm/>} />
        <Route exact path="/beneficiaryform" element={<BeneficiaryForm/>} />

      </Routes>

      {/* <Footer/> */}
    </div>

  );
}


export default App;