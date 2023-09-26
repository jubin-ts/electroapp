import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/login')}>login</button>
    </div>
  );
}

export default Navbar;
