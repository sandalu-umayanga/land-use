import React from 'react';
import headerImg from '../assets/pannala-header.jpg';
import '../styles/Header.css';

const Header = () => {
  return (
    <section className="header">
      <img src={headerImg} alt="Pannala DSD Satellite" className="header-img" />
      <div className="header-overlay">
        <h1>Understanding Land Use Changes in Pannala DSD</h1>
        <p>
          Exploring Land Cover Transformation, Socio-Economic Factors, and Future Predictions for Sustainable Paddy Cultivation.
        </p>
      </div>
    </section>
  );
};

export default Header;
