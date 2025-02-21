import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Land Use and Land Cover Study, Pannala DSD. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
