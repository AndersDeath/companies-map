import React from 'react';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function App() {
  const position: any = [51.505, -0.09];

  return (
    
     
  <MapContainer style={{ width: "100%", height: "100vh" }} center={position} zoom={6}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}

export default App;
