import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectChange = (event) => {
    navigate(event.target.value);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && window.innerWidth <= 768) {
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="main-nav">
      <div className="logo">
        <h1>&#924;&#936;</h1>
      </div>
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About the Study
            </Link>
          </li>
          <li className="dropdown">
            Pages
            <div className="select-wrapper">
              <ul>
                <li><Link to="/land-cover">Land cover changes</Link></li>
                <li><Link to="/agriculture">Agricultural land use</Link></li>
                <li><Link to="/socio-economic">Socio-economic factors</Link></li>
                <li><Link to="/future">Future predictions</Link></li>
                <li><Link to="/policy">Policy recommendations</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;