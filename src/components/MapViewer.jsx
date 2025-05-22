import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/MapViewer.css';

// Import or define land cover maps for different years
// These would be your actual map images for each year
const mapImages = {
  '1956': '/assets/maps/land-cover-1956.jpg',
  '2000': '/assets/maps/land-cover-2000.jpg',
  '2014': '/assets/maps/land-cover-2014.jpg',
  '2023': '/assets/maps/land-cover-2023.jpg',
};

const MapViewer = ({ year }) => {
  const mapContainerRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeLandType, setActiveLandType] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Reset position when year changes
  useEffect(() => {
    setPosition({ x: 0, y: 0 });
    setZoomLevel(1);
    setIsZoomed(false);
    setMapLoaded(false);
  }, [year]);

  // Handle map dragging
  const handleDragEnd = (info) => {
    // Update the position based on drag
    const newX = position.x + info.offset.x;
    const newY = position.y + info.offset.y;
    
    setPosition({ x: newX, y: newY });
  };

  // Handle zoom in/out
  const handleZoomChange = (newZoomLevel) => {
    if (newZoomLevel >= 1 && newZoomLevel <= 3) {
      setZoomLevel(newZoomLevel);
      setIsZoomed(newZoomLevel > 1);
    }
  };

  // Filter visible land types
  const toggleLandType = (landType) => {
    setActiveLandType(activeLandType === landType ? null : landType);
  };

  // Land use legend items with their respective colors
  const landTypes = [
    { id: 'agricultural', name: 'Agricultural Areas', color: '#4caf50' },
    { id: 'forests', name: 'Forests', color: '#2e7d32' },
    { id: 'water', name: 'Water Bodies', color: '#0288d1' },
    { id: 'developed', name: 'Developed Areas', color: '#d32f2f' },
    { id: 'barren', name: 'Barren Lands', color: '#ffa726' }
  ];

  return (
    <div className="map-viewer">
      <div className="map-controls">
        <div className="zoom-controls">
          <button 
            onClick={() => handleZoomChange(zoomLevel - 0.5)}
            disabled={zoomLevel <= 1}
            className="zoom-button"
            aria-label="Zoom out"
          >
            -
          </button>
          <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
          <button 
            onClick={() => handleZoomChange(zoomLevel + 0.5)}
            disabled={zoomLevel >= 3}
            className="zoom-button"
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
        
        <div className="map-filter-controls">
          {landTypes.map((type) => (
            <button
              key={type.id}
              className={`filter-button ${activeLandType === type.id ? 'active' : ''}`}
              style={{ 
                '--color': type.color,
                '--opacity': activeLandType && activeLandType !== type.id ? 0.4 : 1 
              }}
              onClick={() => toggleLandType(type.id)}
              aria-label={`Toggle ${type.name} visibility`}
            >
              <span className="color-indicator" style={{ backgroundColor: type.color }}></span>
              <span className="type-name">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div 
        className={`map-display-container ${isZoomed ? 'zoomed' : ''}`}
        ref={mapContainerRef}
      >
        <motion.div
          className="map-wrapper"
          drag={isZoomed}
          dragConstraints={mapContainerRef}
          onDragEnd={handleDragEnd}
          initial={false}
          animate={{
            scale: zoomLevel,
            x: position.x,
            y: position.y,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Map Image */}
          <div className={`map-image-container ${!mapLoaded ? 'loading' : ''}`}>
            {!mapLoaded && (
              <div className="map-loading">
                <div className="loading-spinner"></div>
                <p>Loading map for {year}...</p>
              </div>
            )}
            <img
              src={mapImages[year] || '/assets/maps/placeholder-map.jpg'}
              alt={`Land cover map of Pannala DSD in ${year}`}
              className={`map-image ${activeLandType ? `highlight-${activeLandType}` : ''}`}
              onLoad={() => setMapLoaded(true)}
            />
            
            {/* Optional: Add overlay elements for interactive points */}
            <div className="map-overlays">
              {/* These would be positioned absolutely over specific areas */}
              {activeLandType === 'agricultural' && (
                <div className="map-highlight agricultural" style={{ top: '30%', left: '40%', width: '20%', height: '25%' }}></div>
              )}
              {activeLandType === 'developed' && (
                <div className="map-highlight developed" style={{ top: '50%', left: '30%', width: '30%', height: '20%' }}></div>
              )}
              {/* More overlays as needed */}
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="map-info">
        <h3>Land Cover - {year}</h3>
        <p className="map-description">
          {year === '1956' && "Predominantly agricultural land use with minimal urban development."}
          {year === '2000' && "Beginning of urbanization with decreasing agricultural areas."}
          {year === '2014' && "Significant urban expansion and reduction in agricultural lands."}
          {year === '2023' && "Predominantly developed areas with fragmented agricultural lands."}
        </p>
        <div className="year-comparison">
          <p><strong>Tip:</strong> Click land types above to highlight specific areas on the map.</p>
        </div>
      </div>
    </div>
  );
};

export default MapViewer;