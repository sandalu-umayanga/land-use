import React from 'react';
import '../styles/SocioEconomic.css';

const SocioEconomic = () => {
  return (
    <div className="socio-economic">
      <h2>Socio-Economic Factors</h2>
      <section className="urban-industrial">
        <h3>Urbanization & Industrialization</h3>
        <p>
          Understand how expanding urban areas and industrial growth are reducing farmland.
        </p>
      </section>
      <section className="policy-market">
        <h3>Policy & Market Forces</h3>
        <p>
          Explore the effects of government policies, land-use regulations, and market trends on paddy cultivation.
        </p>
      </section>
    </div>
  );
};

export default SocioEconomic;
