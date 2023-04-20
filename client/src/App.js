
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import LandingPage from '../src/components/DonorPage/LandingPage';
// import NavBar from '../src/components/NavBar'
import BeneficiaryStories from './components/BeneficiaryStories';
import CharityDetails from './components/DonorPage/CharityDetails';
import CharityDashboard from './components/CharityPage/CharityDashboard'
import CharityEditForm from './components/CharityPage/CharityEditForm'
import ContactUs from './components/ContactUs';
import BeneficiaryForm from './components/CharityPage/BeneficiaryForm';
import chariti


function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        
      <Route path='/' element={<LandingPage/>}/>

      <Route path='/home' element={<LandingPage/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/contactus" element={<ContactUs/>} />
      <Route exact path="/BeneficiariesS" element={<BeneficiaryStories/>} />
      <Route exact path="/charitydetails" element={<CharityDetails/>} />
      <Route exact path="/charitydashboard" element={<CharityDashboard/>} />
      <Route exact path="/charityform" element={<CharityEditForm/>} />
      <Route exact path="/charityedit" element={<CharityEditForm/>} />
      <Route exact path="/charities" element={<CharityEditForm/>} />
      <Route exact path="/beneficiaryform" element={<BeneficiaryForm/>} />
      
      

      </Routes>
    </div>
  );
}

export default App;