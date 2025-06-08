import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import MapViewer from '../components/MapViewer';
import '../styles/AgriculturalLandUse.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AgriculturalLandUse = () => {
  const [selectedYear, setSelectedYear] = useState('2023');
  
  // Paddy cultivation data from the thesis
  const paddyData = {
    years: ['1956', '2000', '2014', '2023'],
    agriculturalAreas: [180.98, 135.98, 71.31, 43.76],
    paddyCultivation: [89.76, 75.89, 67.98, 41.75]
  };
  
  // Chart configuration
  const chartData = {
    labels: paddyData.years,
    datasets: [
      {
        label: 'Agricultural Areas (sq km)',
        data: paddyData.agriculturalAreas,
        backgroundColor: 'rgba(75, 192, 75, 0.8)',
        borderColor: 'rgba(75, 192, 75, 1)',
        borderWidth: 1,
      },
      {
        label: 'Paddy Cultivation (sq km)',
        data: paddyData.paddyCultivation,
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
        borderColor: 'rgba(153, 102, 255, 1)',
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
        text: 'Paddy Cultivation Changes in Pannala DS Division 1956-2023',
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
    <div className="agricultural-land-use">
      <h2>Agricultural Land Use Trends</h2>
      
      <section className="data-visualization">
        <h3>Paddy Cultivation Changes (1956-2023)</h3>
        <div className="chart-container">
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Land Category</th>
                <th>Year 1956</th>
                <th>Year 2000</th>
                <th>Year 2014</th>
                <th>Year 2023</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Agricultural Areas</td>
                <td>180.98</td>
                <td>135.98</td>
                <td>71.31</td>
                <td>43.76</td>
              </tr>
              <tr>
                <td>Paddy Cultivation</td>
                <td>89.76</td>
                <td>75.89</td>
                <td>67.98</td>
                <td>41.75</td>
              </tr>
            </tbody>
            <caption>Table: Paddy Cultivation Changes 1956-2023 (sq km)</caption>
          </table>
        </div>
      </section>
      
      <section className="current-practices">
        <h3>Current Agricultural Practices</h3>
        <p>
          By 2023, the area under paddy cultivation has significantly decreased to 41.75 sq km, 
          compared to 89.76 sq km in 1956. This represents a reduction of over 53% in paddy cultivation 
          over the 67-year period. The overall agricultural land has decreased even more dramatically, 
          from 180.98 sq km to just 43.76 sq km, representing a 76% reduction.
        </p>
        <div className="map-section">
          <h4>Current Land Use Map (2023)</h4>
          <div className="map-container">
            <MapViewer year="2023" />
          </div>
        </div>
      </section>
      
      <section className="historical-comparison">
        <h3>Comparison with Historical Data</h3>
        <p>
          According to the research data, there has been a noticeable decline in paddy cultivation over 67 years 
          from 1956 to 2023. In 1956, paddy fields were more extensive and continuous, and more attention was paid 
          to paddy cultivation throughout the area. By 2000, there was a labor shortage in the farming sector due 
          to the youth engaging in non-agricultural jobs among the rural communities.
        </p>
        <p>
          Between 1956 and 2000, there was a decrease in the area under paddy cultivation to 75.89 sq km. By 2014, 
          there was a further decrease of 7.9 sq km of area under paddy cultivation. The trend analysis of the above 
          data, maps, and graphs shows that there is a strong possibility that paddy cultivation will continue to 
          decrease over time.
        </p>
        
        <div className="year-selector">
          <h4>Explore Historical Land Use Maps</h4>
          <div className="year-buttons">
            {paddyData.years.map(year => (
              <button 
                key={year} 
                className={selectedYear === year ? 'active' : ''} 
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="historical-map">
            <MapViewer year={selectedYear} />
          </div>
        </div>
      </section>
      
      <section className="factors-affecting">
        <h3>Factors Affecting Agricultural Land Use Change</h3>
        <div className="factors-grid">
          <div className="factor">
            <h4>Labor Shortage</h4>
            <p>By 2000, there was a noticeable labor shortage in the farming sector due to youth preferring non-agricultural jobs.</p>
          </div>
          <div className="factor">
            <h4>Urbanization</h4>
            <p>Increased urban development has converted agricultural lands into residential and commercial areas.</p>
          </div>
          <div className="factor">
            <h4>Economic Factors</h4>
            <p>Lower profitability in traditional farming has led farmers to seek alternative livelihoods.</p>
          </div>
          <div className="factor">
            <h4>Land Fragmentation</h4>
            <p>Division of farmland through inheritance has resulted in smaller, less economically viable plots.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriculturalLandUse;