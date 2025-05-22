import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Home.css';

// Import land use map image - add this to your assets folder
import landUseMap2023 from '../assets/land-use-map-2023.jpg'; // Create or add this file

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="home">
      <Header />
      
      {/* Introduction Section */}
      <motion.section 
        className="introduction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2 
            {...fadeIn} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-title"
          >
            Understanding Land Use Changes in Pannala DSD
          </motion.h2>
          <motion.p 
            className="intro-text"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            This website presents an in-depth analysis of land use and land cover changes in the 
            Pannala Divisional Secretariat Division and their impact on paddy cultivation. Our goal is to 
            provide valuable insights for sustainable agricultural practices and policymaking.
          </motion.p>
          <motion.p 
            className="intro-text"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Paddy cultivation is a major component of local agriculture. We analyze how changes such as 
            urbanization, industrialization, and environmental stress impact this crucial industry.
          </motion.p>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="map-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title">Agricultural Land Use Map - 2023</h2>
          <div className="map-container">
            <img src={landUseMap2023} alt="Agricultural Land Use Map 2023" className="land-use-map" />
            <div className="map-overlay">
              <Link to="/land-cover" className="view-maps-btn">View Interactive Maps</Link>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* About Study Preview */}
      <motion.section 
        className="about-preview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="container">
          <h2 className="section-title">About the Study</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>Background</h3>
              <p>
                Paddy cultivation is an integral part of Sri Lanka's agricultural tradition. In Pannala DSD, 
                rapid urbanization and industrialization have led to significant land use changes, 
                challenging food security and local livelihoods.
              </p>
            </div>
            <div className="about-card">
              <h3>Objectives</h3>
              <ul>
                <li>Identify spatial and temporal changes in land cover (1956-2023)</li>
                <li>Examine agricultural land use changes in Pannala DSD</li>
                <li>Determine key socio-economic and environmental factors</li>
                <li>Predict future agricultural land use change</li>
                <li>Propose policy recommendations</li>
              </ul>
              <Link to="/about" className="learn-more-btn">Learn More</Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section 
        className="quick-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container">
          <h2 className="section-title">Explore Topics</h2>
          <div className="links-grid">
            <Link to="/land-cover" className="topic-card">
              <h3>Land Cover Changes</h3>
              <p>Explore mapping and analysis from 1956 to 2023</p>
            </Link>
            <Link to="/agriculture" className="topic-card">
              <h3>Agricultural Land Use</h3>
              <p>Current practices and historical comparisons</p>
            </Link>
            <Link to="/socio-economic" className="topic-card">
              <h3>Socio-Economic Factors</h3>
              <p>Urbanization, industrialization, and policy effects</p>
            </Link>
            <Link to="/future" className="topic-card">
              <h3>Future Predictions</h3>
              <p>Modeling and scenario analysis for future land use</p>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;