import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import LandingPage from '../src/components/DonorPage/LandingPage';
import CharityDashboard from '../src/components/CharityPage/CharityDashboard';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'
import CharityForm from './components/CharityPage/CharityEditForm';
import BeneficiaryForm from './components/CharityPage/BeneficiaryForm';

function App() {
  return (
    <div className="App">
      <Routes>


      <Route path='/' element={<LandingPage/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/contactus" element={<ContactUs/>} />

      <Route exact path="/charityform" element={<CharityForm/>} />
      <Route exact path="/beneficiaryform" element={<BeneficiaryForm/>} />



      <Route exact path="/charitydashboard" element={<CharityDashboard/>} />



      </Routes>

      {/* <Footer/> */}
    </div>

  );
}


export default App;

