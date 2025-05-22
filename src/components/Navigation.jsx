import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  // Handle navigation
  const handleSelectChange = (event) => {
    navigate(event.target.value);
    setMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Toggle pages dropdown
  const togglePagesDropdown = (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      setPagesDropdownOpen(prev => !prev);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setPagesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">Land Use</span>
          <span className="logo-symbol">&#924;&#936;</span>
        </Link>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
        
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul className="nav-menu">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About the Study
              </Link>
            </li>
            <li className={`dropdown ${pagesDropdownOpen ? 'open' : ''}`}>
              <span className="dropdown-toggle" onClick={togglePagesDropdown}>
                Pages <i className="dropdown-icon"></i>
              </span>
              <div className="dropdown-content">
                <ul>
                  <li className={location.pathname === '/land-cover' ? 'active' : ''}>
                    <Link to="/land-cover">Land Cover Changes</Link>
                  </li>
                  <li className={location.pathname === '/agriculture' ? 'active' : ''}>
                    <Link to="/agriculture">Agricultural Land Use</Link>
                  </li>
                  <li className={location.pathname === '/socio-economic' ? 'active' : ''}>
                    <Link to="/socio-economic">Socio-Economic Factors</Link>
                  </li>
                  <li className={location.pathname === '/future' ? 'active' : ''}>
                    <Link to="/future">Future Predictions</Link>
                  </li>
                  <li className={location.pathname === '/policy' ? 'active' : ''}>
                    <Link to="/policy">Policy Recommendations</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;