import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AboutStudy from './pages/AboutStudy';
import LandCoverChanges from './pages/LandCoverChanges';
import AgriculturalLandUse from './pages/AgriculturalLandUse';
import SocioEconomic from './pages/SocioEconomic';
import FuturePredictions from './pages/FuturePredictions';
import PolicyRecommendations from './pages/PolicyRecomendation';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutStudy />} />
        <Route path="/land-cover" element={<LandCoverChanges />} />
        <Route path="/agriculture" element={<AgriculturalLandUse />} />
        <Route path="/socio-economic" element={<SocioEconomic />} />
        <Route path="/future" element={<FuturePredictions />} />
        <Route path="/policy" element={<PolicyRecommendations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
