import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Ayush Kumar</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
