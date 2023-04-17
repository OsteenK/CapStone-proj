import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* The rest of your app */}
      <Footer />
    </div>
  );
}

export default App;