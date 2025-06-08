import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/SocioEconomic.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SocioEconomic = () => {
  const [activeTab, setActiveTab] = useState('findings');

  // Land use change data from 2000-2040
  const landUseData = {
    years: ['2000', '2010', '2020', '2030', '2040'],
    cultivatedAreas: [135.98, 110.32, 50.76, 35.52, 25.52],
    forests: [29.86, 35.42, 33.41, 28.98, 26.41],
    waterBodies: [6.37, 4.57, 5.74, 4.34, 4.24],
    developedAreas: [84.99, 117.47, 147.81, 179.31, 180.71],
    barrenAreas: [126.69, 43.74, 41.31, 67.31, 43.74]
  };

  // Chart configuration
  const chartData = {
    labels: landUseData.years,
    datasets: [
      {
        label: 'Cultivated Areas',
        data: landUseData.cultivatedAreas,
        backgroundColor: 'rgba(75, 192, 75, 0.8)',
        borderColor: 'rgba(75, 192, 75, 1)',
        borderWidth: 1,
      },
      {
        label: 'Forests',
        data: landUseData.forests,
        backgroundColor: 'rgba(34, 139, 34, 0.8)',
        borderColor: 'rgba(34, 139, 34, 1)',
        borderWidth: 1,
      },
      {
        label: 'Water Bodies',
        data: landUseData.waterBodies,
        backgroundColor: 'rgba(0, 119, 190, 0.8)',
        borderColor: 'rgba(0, 119, 190, 1)',
        borderWidth: 1,
      },
      {
        label: 'Developed Areas',
        data: landUseData.developedAreas,
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Barren Areas',
        data: landUseData.barrenAreas,
        backgroundColor: 'rgba(255, 206, 86, 0.8)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Land Use and Land Cover Area in Pannala DSD (2000-2040)',
        font: {
          size: 16
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Area (sq km)'
        }
      }
    }
  };

  return (
    <div className="socio-economic">
      <h2>Socio-Economic Impacts on Land Use</h2>
      
      <div className="tab-navigation">
        <button 
          className={activeTab === 'findings' ? 'active' : ''} 
          onClick={() => setActiveTab('findings')}
        >
          Research Findings
        </button>
        <button 
          className={activeTab === 'factors' ? 'active' : ''} 
          onClick={() => setActiveTab('factors')}
        >
          Key Factors
        </button>
        <button 
          className={activeTab === 'projections' ? 'active' : ''} 
          onClick={() => setActiveTab('projections')}
        >
          Future Projections
        </button>
      </div>

      {activeTab === 'findings' && (
        <div className="tab-content">
          <section className="methodology">
            <h3>Research Methodology</h3>
            <p>
              This study employed a mixed-methods approach to analyze the temporal and spatial changes 
              in paddy cultivation. A questionnaire survey was conducted to gather data on the socio-economic 
              factors influencing agricultural land use changes. Data analysis was performed using SPSS software 
              to identify significant trends and correlations.
            </p>
            <p>
              The spatial analysis involved mapping agricultural land use from 1956 to 2023, with a particular
              focus on paddy cultivation changes. These historical maps were used as the foundation for future 
              projections using a cellular automata model to predict land use changes in 2030 and 2040.
            </p>
          </section>
          
          <section className="land-use-data">
            <h3>Land Use Change (2000-2040)</h3>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Land Categories</th>
                    <th>Year 2000 (sq km)</th>
                    <th>Year 2010 (sq km)</th>
                    <th>Year 2020 (sq km)</th>
                    <th>Year 2030 (sq km)</th>
                    <th>Year 2040 (sq km)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cultivated areas</td>
                    <td>135.98</td>
                    <td>110.32</td>
                    <td>50.76</td>
                    <td>35.52</td>
                    <td>25.52</td>
                  </tr>
                  <tr>
                    <td>Forests</td>
                    <td>29.86</td>
                    <td>35.42</td>
                    <td>33.41</td>
                    <td>28.98</td>
                    <td>26.41</td>
                  </tr>
                  <tr>
                    <td>Water bodies</td>
                    <td>6.37</td>
                    <td>4.57</td>
                    <td>5.74</td>
                    <td>4.34</td>
                    <td>4.24</td>
                  </tr>
                  <tr>
                    <td>Developed areas</td>
                    <td>84.99</td>
                    <td>117.47</td>
                    <td>147.81</td>
                    <td>179.31</td>
                    <td>180.71</td>
                  </tr>
                  <tr>
                    <td>Barren areas</td>
                    <td>126.69</td>
                    <td>43.74</td>
                    <td>41.31</td>
                    <td>67.31</td>
                    <td>43.74</td>
                  </tr>
                </tbody>
              </table>
              <p className="data-source">Source: Prepared by author, 2025</p>
            </div>
            
            <div className="chart-container">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </section>
          
          <section className="key-findings">
            <h3>Key Research Findings</h3>
            <p>
              According to the research, the dominant land use category in the year 2000 was cultivation, 
              covering 135.98 sq km. Developed areas were found in the area by the year 2000. Compared to the 
              year 2000, there is a decrease in cultivation activities to 25.52 sq km by 2040. In comparison, 
              developed areas are scheduled to show a high increase by 2040.
            </p>
            <p>
              By 2020, developed areas expanded to 147.81 sq km, especially showing urban growth around settlements. 
              The 2030 projection shows that the growing urban areas have encroached on cultivated areas. Water bodies 
              are slightly stable up to 4.34 sq km, and the regrowth of wastelands is mainly seen up to 67.31 sq km in 2030. 
              This indicates an increase in land degradation due to unsustainable development.
            </p>
          </section>
        </div>
      )}
      
      {activeTab === 'factors' && (
        <div className="tab-content">
          <section className="urban-industrial">
            <h3>Urbanization & Industrialization</h3>
            <div className="factor-content">
              <div className="factor-text">
                <p>
                  The study identified urbanization and industrialization as key drivers of agricultural land use change 
                  in the Pannala Divisional Secretariat. Urban expansion has consistently encroached upon formerly 
                  cultivated lands, with developed areas increasing from 84.99 sq km in 2000 to a projected 180.71 sq km by 2040.
                </p>
                <p>
                  Industrial growth has created alternative employment opportunities, drawing labor away from 
                  agricultural activities. This labor shift has contributed to the abandonment of paddy fields, 
                  particularly in areas closer to urban centers.
                </p>
              </div>
              <div className="impact-metrics">
                <div className="metric">
                  <span className="metric-value">+112%</span>
                  <span className="metric-label">Growth in developed areas (2000-2040)</span>
                </div>
                <div className="metric">
                  <span className="metric-value">-81%</span>
                  <span className="metric-label">Reduction in cultivated areas (2000-2040)</span>
                </div>
              </div>
            </div>
          </section>
          
          <section className="policy-market">
            <h3>Policy & Market Forces</h3>
            <p>
              Government policies regarding land use regulations and agricultural subsidies have significantly 
              influenced paddy cultivation practices. Market forces, including changing commodity prices and 
              the relative profitability of different land uses, have incentivized the conversion of agricultural land.
            </p>
            <p>
              The questionnaire survey revealed that economic considerations, particularly the higher value of land for 
              non-agricultural purposes, have driven many landowners to convert their paddy fields. Additionally, aging 
              farmer populations without successors willing to continue agricultural practices has accelerated land use change.
            </p>
          </section>
          
          <section className="environmental-factors">
            <h3>Climate Change & Environmental Factors</h3>
            <p>
              Climate change has emerged as a significant factor affecting agricultural practices in the region. 
              Changing rainfall patterns, increased temperatures, and more frequent extreme weather events have 
              made traditional paddy cultivation more challenging and less predictable.
            </p>
            <p>
              Environmental degradation, including soil quality deterioration and water availability issues, 
              has further contributed to the abandonment of agricultural lands. The increase in barren areas 
              from 41.31 sq km in 2020 to 67.31 sq km by 2030 reflects this environmental stress.
            </p>
          </section>
        </div>
      )}
      
      {activeTab === 'projections' && (
        <div className="tab-content">
          <section className="future-projections">
            <h3>Land Use Projections (2030-2040)</h3>
            <p>
              Using a cellular automata model based on historical land use patterns, this research projected 
              future land use changes in the Pannala DSD. The projections indicate a continued decline in 
              cultivated areas and a corresponding increase in developed areas.
            </p>
            <div className="projection-highlights">
              <div className="highlight-card">
                <h4>2030 Projections</h4>
                <ul>
                  <li>Cultivated areas: 35.52 sq km (73.9% reduction from 2000)</li>
                  <li>Developed areas: 179.31 sq km (111% increase from 2000)</li>
                  <li>Barren areas: 67.31 sq km (significant increase from 2020)</li>
                  <li>Forests: 28.98 sq km (slight decline from 2010 peak)</li>
                </ul>
              </div>
              <div className="highlight-card">
                <h4>2040 Projections</h4>
                <ul>
                  <li>Cultivated areas: 25.52 sq km (81.2% reduction from 2000)</li>
                  <li>Developed areas: 180.71 sq km (112.6% increase from 2000)</li>
                  <li>Barren areas: 43.74 sq km (reduction from 2030 peak)</li>
                  <li>Forests: 26.41 sq km (continued gradual decline)</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="implications">
            <h3>Implications of Projected Changes</h3>
            <p>
              If current policies remain unchanged, the food production capacity in the area will be significantly 
              reduced by 2030. By 2040, an even more drastic reduction is shown compared to the year 2000. Agricultural 
              and natural landscapes can change the existing landscape due to construction, with forest cover also showing 
              a relative decrease by 2040.
            </p>
            <p>
              In general, once agriculturally fertile areas can eventually become urban landscapes. This highlights 
              the need to strengthen policies and planning mechanisms for sustainable agriculture and green urban development. 
              If not, the consequences can be severe for both people and the environment.
            </p>
          </section>
          
          <section className="recommendations">
            <h3>Policy Recommendations</h3>
            <div className="recommendations-grid">
              <div className="recommendation">
                <h4>Sustainable Land Use Planning</h4>
                <p>Implement integrated land use planning that balances urban development needs with agricultural preservation.</p>
              </div>
              <div className="recommendation">
                <h4>Agricultural Incentives</h4>
                <p>Develop economic incentives to make agricultural activities, particularly paddy cultivation, more profitable and attractive.</p>
              </div>
              <div className="recommendation">
                <h4>Green Urban Development</h4>
                <p>Promote compact urban growth with green infrastructure to minimize encroachment on agricultural lands.</p>
              </div>
              <div className="recommendation">
                <h4>Climate Adaptation</h4>
                <p>Support farmers in adopting climate-resilient agricultural practices and crop varieties.</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default SocioEconomic;