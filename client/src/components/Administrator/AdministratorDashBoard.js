import React from 'react';

function AdministratorDashBoard({ handleLogout }) {
  return (
    <div>
      <h1>Welcome to the Administrator Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdministratorDashBoard;
