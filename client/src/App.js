import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import LandingPage from '../src/components/DonorPage/LandingPage';

import NavBar from '../src/components/NavBar'
import Footer from './components/Footer';
import BeneficiaryForm from './components/CharityPage/BeneficiaryForm';




function App() {
  return (
    <div className="App">

      <BeneficiaryForm />

      {/* <NavBar/>
      <Footer/>
      <Routes>

      <Route path='/' element={<LandingPage/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />


      </Routes> */}
    </div>
  );
}

export default App;