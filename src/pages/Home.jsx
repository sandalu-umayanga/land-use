import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          This website presents an in-depth analysis of land use and land cover changes in the Pannala Divisional Secretariat Division and their impact on paddy cultivation. Our goal is to provide valuable insights for sustainable agricultural practices and policymaking.
        </p>
      </section>
    </div>
  );
};

export default Home;
