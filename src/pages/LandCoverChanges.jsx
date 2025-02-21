import React from 'react';
import MapViewer from '../components/MapViewer';
import '../styles/LandCoverChanges.css';

const LandCoverChanges = () => {
  return (
    <div className="land-cover-changes">
      <h2>Land Cover Changes</h2>
      <p>
        Explore interactive maps displaying land cover changes over the years 1956, 2000, 2014, and 2023.
      </p>
      <MapViewer />
      <section className="key-findings">
        <h3>Key Findings</h3>
        <ul>
          <li>Shifts in forest cover, urban expansion, water bodies, and agricultural areas.</li>
          <li>Variations in paddy cultivation extents.</li>
        </ul>
      </section>
    </div>
  );
};

export default LandCoverChanges;
