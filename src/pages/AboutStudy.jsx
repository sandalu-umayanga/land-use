import React from 'react';
import '../styles/AboutStudy.css';

const AboutStudy = () => {
  return (
    <div className="about-study">
      <h2>About the Study</h2>
      <section className="background">
        <h3>Background of the Study</h3>
        <p>
          Paddy cultivation is an integral part of Sri Lanka’s agricultural tradition. In Pannala DSD, rapid urbanization and industrialization have led to significant land use changes, challenging food security and local livelihoods.
        </p>
      </section>
      <section className="objectives">
        <h3>Objectives</h3>
        <ul>
          <li><strong>Main Objective:</strong> Assess the land use changes and their impacts on paddy cultivation in Pannala DSD.</li>
          <li>
            <strong>Sub Objectives:</strong>
            <ol>
              <li>Identify spatial and temporal changes in land cover (1956, 2000, 2014, 2023).</li>
              <li>Examine changes in agricultural land use.</li>
              <li>Determine socio-economic and environmental factors influencing these changes.</li>
              <li>Predict future land use changes.</li>
              <li>Propose policy recommendations for sustainable paddy cultivation.</li>
            </ol>
          </li>
        </ul>
      </section>
      <section className="methodology">
        <h3>Methodology</h3>
        <p>
          The study uses satellite imagery, GIS mapping, field surveys, questionnaires, and predictive modeling (Cellular Automata) to analyze past, current, and future land use trends.
        </p>
      </section>
      <section className="significance">
        <h3>Significance</h3>
        <p>
          This research aligns with SDG 2 (Zero Hunger) and SDG 15 (Life on Land) by promoting sustainable farming practices and responsible land management.
        </p>
      </section>
    </div>
  );
};

export default AboutStudy;
