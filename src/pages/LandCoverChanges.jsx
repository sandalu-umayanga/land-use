import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MapViewer from '../components/MapViewer';
import '../styles/LandCoverChanges.css';

// Import icons if you have them installed
import { FaTree, FaCity, FaWater, FaSeedling, FaMountain } from 'react-icons/fa';

const LandCoverChanges = () => {
  const [activeYear, setActiveYear] = useState('2023');
  
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  // Land use data from the provided images
  const landUseData = {
    years: ['1956', '2000', '2014', '2023'],
    agricultural: [180.98, 135.98, 71.31, 43.76],
    forests: [38.54, 29.86, 43.66, 30.41],
    waterBodies: [4.43, 6.37, 3.84, 6.79],
    developed: [14.97, 43.59, 145.54, 170.33],
    barren: [14.97, 126.69, 37.93, 41.45]
  };
  
  return (
    <div className="land-cover-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Land Cover Changes</h1>
          <p className="subtitle">Visualizing the transformation of Pannala DSD from 1956 to 2023</p>
        </div>
      </motion.section>
      
      {/* Interactive Timeline Selector */}
      <motion.section 
        className="timeline-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container">
          <h2>Explore Different Time Periods</h2>
          <div className="timeline-selector">
            {landUseData.years.map(year => (
              <button
                key={year}
                className={`time-button ${activeYear === year ? 'active' : ''}`}
                onClick={() => setActiveYear(year)}
              >
                <span className="year">{year}</span>
                <span className="dot"></span>
              </button>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Map Visualization */}
      <motion.section 
        className="map-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container">
          <h2>Interactive Land Cover Map</h2>
          <p className="map-description">
            Explore the spatial distribution of land cover types during {activeYear}. 
            Toggle between different years to visualize changes over time.
          </p>
          <div className="map-container">
            <MapViewer year={activeYear} />
          </div>
          <div className="map-legend">
            <div className="legend-item">
              <span className="color-box agricultural"></span>
              <span>Agricultural Areas</span>
            </div>
            <div className="legend-item">
              <span className="color-box forests"></span>
              <span>Forests</span>
            </div>
            <div className="legend-item">
              <span className="color-box water"></span>
              <span>Water Bodies</span>
            </div>
            <div className="legend-item">
              <span className="color-box developed"></span>
              <span>Developed Areas</span>
            </div>
            <div className="legend-item">
              <span className="color-box barren"></span>
              <span>Barren Lands</span>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Data Visualization Section */}
      <motion.section 
        className="data-visualization-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container">
          <h2>Land Cover Distribution</h2>
          <div className="chart-container">
            <img
              src="/assets/land-use-chart.png"
              alt="Land cover distribution chart from 1956-2023"
              className="land-cover-chart"
            />
            {/* In production, replace with actual chart component */}
          </div>
          <p className="chart-source">Source: Prepared by author, 2025</p>
        </div>
      </motion.section>
      
      {/* Land Use Categories */}
      <motion.section 
        className="land-use-categories-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="container">
          <h2>Land Use Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <FaSeedling />
              </div>
              <h3>Agricultural Areas</h3>
              <div className="trend-indicator decreasing">
                <span>-76%</span>
              </div>
              <p>Decreased steadily from 180.98 km² in 1956 to just 43.76 km² in 2023, showing significant conversion to other land uses.</p>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <FaTree />
              </div>
              <h3>Forests</h3>
              <div className="trend-indicator fluctuating">
                <span>-21%</span>
              </div>
              <p>Fluctuated over the study period, decreasing from 38.54 km² in 1956 to 29.86 km² in 2000, temporarily increasing to 43.66 km² in 2014, and declining again to 30.41 km² by 2023.</p>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <FaWater />
              </div>
              <h3>Water Bodies</h3>
              <div className="trend-indicator increasing">
                <span>+53%</span>
              </div>
              <p>Varied over time, from 4.43 km² in 1956 to 6.79 km² in 2023, with fluctuations possibly related to irrigation infrastructure and seasonal variations.</p>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <FaCity />
              </div>
              <h3>Developed Areas</h3>
              <div className="trend-indicator increasing">
                <span>+1037%</span>
              </div>
              <p>Dramatic increase from 14.97 km² in 1956 to 170.33 km² in 2023, representing rapid urbanization and infrastructure development.</p>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <FaMountain />
              </div>
              <h3>Barren Lands</h3>
              <div className="trend-indicator fluctuating">
                <span>+177%</span>
              </div>
              <p>Highly variable, from 14.97 km² in 1956 to a peak of 126.69 km² in 2000, before settling at 41.45 km² in 2023, likely representing transitional land uses.</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Data Table Section */}
      <motion.section 
        className="data-table-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="container">
          <h2>Land Use Change (1956-2023)</h2>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Land Use Category</th>
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
                  <td>Forests</td>
                  <td>38.54</td>
                  <td>29.86</td>
                  <td>43.66</td>
                  <td>30.41</td>
                </tr>
                <tr>
                  <td>Water bodies</td>
                  <td>4.43</td>
                  <td>6.37</td>
                  <td>3.84</td>
                  <td>6.79</td>
                </tr>
                <tr>
                  <td>Developed Areas</td>
                  <td>14.97</td>
                  <td>43.59</td>
                  <td>145.54</td>
                  <td>170.33</td>
                </tr>
                <tr>
                  <td>Barren lands</td>
                  <td>14.97</td>
                  <td>126.69</td>
                  <td>37.93</td>
                  <td>41.45</td>
                </tr>
              </tbody>
            </table>
            <p className="table-note">Area measurement in km²</p>
            <p className="table-source">Source: Prepared by author, 2025</p>
          </div>
        </div>
      </motion.section>
      
      {/* Key Findings Section */}
      <motion.section 
        className="key-findings-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="container">
          <h2>Key Findings</h2>
          <div className="findings-grid">
            <div className="finding-card">
              <h3>Urban Expansion</h3>
              <p>Rapid and steady expansion of developed lands throughout all periods (1956-2023), with development surpassing all other land use types.</p>
            </div>
            
            <div className="finding-card">
              <h3>Agricultural Decline</h3>
              <p>Significant reduction in agricultural areas from 180.98 km² in 1956 to just 43.76 km² in 2023, representing a 76% decrease.</p>
            </div>
            
            <div className="finding-card">
              <h3>Forest Fluctuation</h3>
              <p>Fluctuating forest cover with a decline during 1956-2000, temporary increase during 2000-2014, and another decline during 2014-2023.</p>
            </div>
            
            <div className="finding-card">
              <h3>Land Conversion</h3>
              <p>Former agricultural lands have primarily been converted to developed areas, indicating a shift from traditional farming to urban infrastructure.</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Implications Section */}
      <motion.section 
        className="implications-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="container">
          <h2>Environmental and Social Implications</h2>
          <div className="implications-content">
            <p>
              The dramatic land cover changes observed in Pannala DSD have significant implications for food security, 
              ecosystem services, and community livelihoods. The conversion of agricultural land to developed areas 
              raises concerns about local food production capacity and traditional farming practices.
            </p>
            <div className="action-buttons">
              <button className="action-button">
                View Detailed Report
              </button>
              <button className="action-button secondary">
                Download Data
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandCoverChanges;