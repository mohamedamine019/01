import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className='logo'>Varphi Club</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-info-circle"></i> About
        </Link>
        <Link to="/news" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-newspaper"></i> News
        </Link>
        <Link to="/activities" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-tasks"></i> Activities
        </Link>
        <Link to="/membre" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-users"></i> Membre
        </Link>
        <Link to="/join" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-user-plus"></i> Join Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
