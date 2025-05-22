import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import headerImg from '../assets/pannala-header.jpg';
import '../styles/Header.css';

const Header = () => {
  return (
    <section className="header">
      <img src={headerImg} alt="Pannala DSD Satellite" className="header-img" />
      <div className="header-gradient-overlay">
        <div className="header-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="header-title"
          >
            Understanding Land Use Changes in Pannala DSD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="header-subtitle"
          >
            Exploring Land Cover Transformation, Socio-Economic Factors, and Future Predictions 
            for Sustainable Paddy Cultivation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="header-buttons"
          >
            <Link to="/about" className="header-cta-button">Explore the Study</Link>
            <Link to="/land-cover" className="header-secondary-button">View Maps</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;