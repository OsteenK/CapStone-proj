
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import LandingPage from '../src/components/DonorPage/LandingPage';
// import NavBar from '../src/components/NavBar'

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        
      <Route path='/' element={<LandingPage/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      

      </Routes>
    </div>
  );
}

export default App;