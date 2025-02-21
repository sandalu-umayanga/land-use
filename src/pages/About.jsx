// src/pages/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About the Study</h2>
      <section className="background">
        <h3>Background of the Study</h3>
        <p>
          Paddy cultivation plays a vital role in food security and livelihoods in Pannala DSD. This study documents how land use changes—from urban expansion to industrialization—affect paddy lands.
        </p>
      </section>
      <section className="objectives">
        <h3>Objectives</h3>
        <ul>
          <li><strong>Main Objective:</strong> Assess land use changes and their impacts on paddy cultivation.</li>
          <li><strong>Sub Objectives:</strong>
            <ul>
              <li>Identify spatial and temporal changes in land cover (1956, 2000, 2014, 2023).</li>
              <li>Analyze socio-economic and environmental factors.</li>
              <li>Predict future land use changes.</li>
              <li>Propose policy recommendations.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="methodology">
        <h3>Methodology</h3>
        <p>
          The study integrates satellite imagery (GIS mapping), field surveys, and predictive modeling (using Cellular Automata) to analyze changes and trends.
        </p>
      </section>
    </div>
  );
};

export default About;
