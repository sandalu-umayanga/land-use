import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/MapViewer.css';

const MapViewer = () => {
  return (
    <MapContainer center={[7.5, 80.0]} zoom={8} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Future: Add additional layers for different years */}
    </MapContainer>
  );
};

export default MapViewer;
