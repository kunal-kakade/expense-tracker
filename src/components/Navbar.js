import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav>
      <h3>Expense Tracker</h3>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
