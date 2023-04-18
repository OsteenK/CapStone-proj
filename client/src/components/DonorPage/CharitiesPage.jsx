import React from 'react';

function CharitiesPage({ handleLogout }) {
  return (
    <div>
      <h1>Welcome to the Charities Page!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default CharitiesPage;
