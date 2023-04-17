//this was test for signup and login pages please revert to app.js styling -antony and osteen

import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp"

function App() {
  return (
    <NavBar>
    <Footer>
    <div className="App bg-purple-200">
      {
        // currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
    </Footer>
    </NavBar>
  );
}

export default App;