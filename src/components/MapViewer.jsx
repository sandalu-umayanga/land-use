import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/MapViewer.css';

// Import images properly in React
// Either import them directly (recommended):
import map1956 from '../assets/maps/land-cover-1956.jpeg';
import map2000 from '../assets/maps/land-cover-2000.jpeg';
import map2014 from '../assets/maps/land-cover-2014.jpeg';
import map2023 from '../assets/maps/land-cover-2023.jpeg';
//import placeholderMap from '/assets/maps/placeholder-map.jpg';

// Or use public folder with absolute paths:
const mapImages = {
  '1956': map1956,
  '2000': map2000,
  '2014': map2014,
  '2023': map2023,
};

const MapViewer = ({ year }) => {
  const mapContainerRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeLandType, setActiveLandType] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Reset position when year changes
  useEffect(() => {
    setPosition({ x: 0, y: 0 });
    setZoomLevel(1);
    setIsZoomed(false);
    setMapLoaded(false);
    setMapError(false);
  }, [year]);

  // Handle map dragging with better constraints
  const handleDragEnd = (info) => {
    // Update the position based on drag
    const newX = position.x + info.offset.x;
    const newY = position.y + info.offset.y;
    
    // Optional: Add boundary checks here if needed
    // Calculate max allowable drag based on container and map size
    
    setPosition({ x: newX, y: newY });
  };

  // Handle zoom in/out
  const handleZoomChange = (newZoomLevel) => {
    if (newZoomLevel >= 1 && newZoomLevel <= 3) {
      setZoomLevel(newZoomLevel);
      setIsZoomed(newZoomLevel > 1);
      
      // Reset position when zooming out completely
      if (newZoomLevel === 1) {
        setPosition({ x: 0, y: 0 });
      }
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

  // Dynamic overlay positioning based on the map data
  const getOverlayPositions = (landType, yearData) => {
    // This would ideally come from a data source matching coordinates to years and land types
    const overlayData = {
      'agricultural': {
        '1956': { top: '30%', left: '40%', width: '20%', height: '25%' },
        '2000': { top: '35%', left: '35%', width: '18%', height: '20%' },
        '2014': { top: '40%', left: '45%', width: '15%', height: '15%' },
        '2023': { top: '42%', left: '48%', width: '12%', height: '12%' },
      },
      'developed': {
        '1956': { top: '50%', left: '30%', width: '10%', height: '10%' },
        '2000': { top: '50%', left: '30%', width: '20%', height: '15%' },
        '2014': { top: '50%', left: '30%', width: '25%', height: '18%' },
        '2023': { top: '50%', left: '30%', width: '30%', height: '20%' },
      },
      // Add data for other land types
    };
    
    return (overlayData[landType] && overlayData[landType][year]) || null;
  };

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
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
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
          <div className={`map-image-container ${!mapLoaded && !mapError ? 'loading' : ''} ${mapError ? 'error' : ''}`}>
            {!mapLoaded && !mapError && (
              <div className="map-loading">
                <div className="loading-spinner"></div>
                <p>Loading map for {year}...</p>
              </div>
            )}
            {mapError && (
              <div className="map-error">
                <p>Failed to load map for {year}.</p>
                <button onClick={() => setMapError(false)} className="retry-button">Retry</button>
              </div>
            )}
            <img
              src={mapImages[year] || placeholderMap}
              alt={`Land cover map of Pannala DSD in ${year}`}
              className={`map-image ${activeLandType ? `highlight-${activeLandType}` : ''}`}
              onLoad={() => setMapLoaded(true)}
              onError={() => setMapError(true)}
              style={{ display: mapError ? 'none' : 'block' }}
            />
            
            {/* Overlay elements for interactive points */}
            <div className="map-overlays">
              {activeLandType === 'agricultural' && getOverlayPositions('agricultural', year) && (
                <div 
                  className="map-highlight agricultural" 
                  style={getOverlayPositions('agricultural', year)}
                ></div>
              )}
              {activeLandType === 'developed' && getOverlayPositions('developed', year) && (
                <div 
                  className="map-highlight developed" 
                  style={getOverlayPositions('developed', year)}
                ></div>
              )}
              {/* Add more land type overlays as needed */}
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