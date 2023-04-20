
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import LandingPage from '../src/components/DonorPage/LandingPage';
// import NavBar from '../src/components/NavBar'
import BeneficiaryStories from './components/BeneficiaryStories';
import CharityDetails from './components/DonorPage/CharityDetails';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>

        
      <Route path='/' element={<LandingPage/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/BeneficiariesS" element={<BeneficiaryStories/>} />
      <Route exact path="/charitydetails" element={<CharityDetails/>} />
      

      </Routes>
    </div>
  );
}

export default App;

