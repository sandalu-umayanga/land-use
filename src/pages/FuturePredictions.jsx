import React from 'react';
import '../styles/FuturePredictions.css';

const FuturePredictions = () => {
  return (
    <div className="future-predictions">
      <h2>Future Land Use Predictions</h2>
      <section className="modeling">
        <h3>Modeling & Scenario Analysis</h3>
        <p>
          Interactive prediction maps illustrate how land use might evolve in 2030, 2040, and beyond.
        </p>
      </section>
      <section className="potential-impacts">
        <h3>Potential Impacts on Paddy Cultivation</h3>
        <p>
          Examine the risks to food security, agricultural employment, and ecological balance.
        </p>
      </section>
    </div>
  );
};

export default FuturePredictions;
