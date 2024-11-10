// header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/membre">Membre</Link> 
        <Link to="/join">Join Us</Link>
      </nav>
    </header>
  );
};

export default Header