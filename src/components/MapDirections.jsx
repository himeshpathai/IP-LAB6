import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CollegeMap = () => {
  
  const collegeLocation = [19.0459404540001, 72.88924988217465];
  const userLocation = [19.065851405998316, 72.87923311101144]; 

  
  const route = [
    userLocation,
    collegeLocation
  ];

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={collegeLocation} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={collegeLocation}>
          <Popup>
            Vivekanand Education Society's Institute of Technology
          </Popup>
        </Marker>
        
        <Polyline positions={route} color="blue" />
      </MapContainer>
    </div>
  );
};

export default CollegeMap;
