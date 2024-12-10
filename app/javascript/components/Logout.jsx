import React from 'react';

function Logout({ onLogout }) {
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/sign_out', {
        method: 'DELETE',
      });

      console.log('Logout successful');
      onLogout(); // Perform logout action in the parent component
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
