//this was test for signup and login pages please revert to app.js styling -antony and osteen

import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp"

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App bg-purple-200">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
