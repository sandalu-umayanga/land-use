import React, { useState } from 'react';
import { MapContainer, TileLayer, ImageOverlay, Polygon, LayerGroup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/MapViewer.css';

// Import map images
import map1956 from '../assets/maps/land-cover-1956.jpeg';
import map2000 from '../assets/maps/land-cover-2000.jpeg';
import map2014 from '../assets/maps/land-cover-2014.jpeg';
import map2023 from '../assets/maps/land-cover-2023.jpeg';

// Define map image bounds (you would need to define the correct coordinates)
const imageBounds = [
  [6.98, 79.85], // Southwest corner [lat, lng]
  [7.10, 80.05]  // Northeast corner [lat, lng]
];

// Sample area polygons - replace with actual coordinates for your land types
const landTypeAreas = {
  agricultural: {
    '1956': [[7.04, 79.91], [7.06, 79.91], [7.06, 79.94], [7.04, 79.94]],
    '2000': [[7.04, 79.91], [7.06, 79.91], [7.06, 79.93], [7.04, 79.93]],
    '2014': [[7.04, 79.91], [7.05, 79.91], [7.05, 79.92], [7.04, 79.92]],
    '2023': [[7.04, 79.91], [7.045, 79.91], [7.045, 79.915], [7.04, 79.915]]
  },
  developed: {
    '1956': [[7.05, 79.95], [7.06, 79.95], [7.06, 79.96], [7.05, 79.96]],
    '2000': [[7.05, 79.95], [7.07, 79.95], [7.07, 79.97], [7.05, 79.97]],
    '2014': [[7.04, 79.95], [7.07, 79.95], [7.07, 79.98], [7.04, 79.98]],
    '2023': [[7.03, 79.94], [7.08, 79.94], [7.08, 79.99], [7.03, 79.99]]
  },
  // Add other land types similarly
}

// Component to fit map to bounds when year changes
function MapController({ year }) {
  const map = useMap();
  
  React.useEffect(() => {
    map.fitBounds(imageBounds);
  }, [map, year]);
  
  return null;
}

const MapViewer = ({ year }) => {
  const [activeLandType, setActiveLandType] = useState(null);
  
  const mapImages = {
    '1956': map1956,
    '2000': map2000,
    '2014': map2014,
    '2023': map2023,
  };

  // Land use types
  const landTypes = [
    { id: 'agricultural', name: 'Agricultural Areas', color: '#4caf50' },
    { id: 'forests', name: 'Forests', color: '#2e7d32' },
    { id: 'water', name: 'Water Bodies', color: '#0288d1' },
    { id: 'developed', name: 'Developed Areas', color: '#d32f2f' },
    { id: 'barren', name: 'Barren Lands', color: '#ffa726' }
  ];

  // Toggle land type filtering
  const toggleLandType = (landType) => {
    setActiveLandType(activeLandType === landType ? null : landType);
  };

  return (
    <div className="map-viewer">
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
          >
            <span className="color-indicator" style={{ backgroundColor: type.color }}></span>
            <span className="type-name">{type.name}</span>
          </button>
        ))}
      </div>

      <div className="map-display-container">
        <MapContainer
          center={[(imageBounds[0][0] + imageBounds[1][0])/2, (imageBounds[0][1] + imageBounds[1][1])/2]} 
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <MapController year={year} />
          
          {/* Base layer - can be a light background or satellite imagery */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            opacity={0.3}
          />
          
          {/* Overlay the historical map image */}
          <ImageOverlay
            url={mapImages[year]}
            bounds={imageBounds}
            opacity={0.8}
          />
          
          {/* Polygon overlays for land types */}
          {landTypes.map(type => {
            // Skip if filtering and this isn't the active type
            if (activeLandType && activeLandType !== type.id) return null;
            
            // Skip if we don't have polygon data for this type/year
            if (!landTypeAreas[type.id] || !landTypeAreas[type.id][year]) return null;
            
            return (
              <LayerGroup key={`${type.id}-${year}`}>
                <Polygon
                  positions={landTypeAreas[type.id][year]}
                  pathOptions={{
                    fillColor: type.color,
                    fillOpacity: 0.3,
                    weight: 2,
                    color: type.color,
                    dashArray: '5',
                  }}
                >
                  <Tooltip sticky>{type.name}</Tooltip>
                </Polygon>
              </LayerGroup>
            );
          })}
        </MapContainer>
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