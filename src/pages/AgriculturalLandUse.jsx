import React from 'react';
import '../styles/AgriculturalLandUse.css';

const AgriculturalLandUse = () => {
  return (
    <div className="agricultural-land-use">
      <h2>Agricultural Land Use Trends</h2>
      <section className="current-practices">
        <h3>Current Agricultural Practices</h3>
        <p>
          Discover the status of paddy cultivation and other agricultural activities in the region.
        </p>
      </section>
      <section className="historical-comparison">
        <h3>Comparison with Historical Data</h3>
        <p>
          Learn how farming methods, land ownership patterns, and crop types have evolved over time.
        </p>
      </section>
    </div>
  );
};

export default AgriculturalLandUse;
