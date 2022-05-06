import React, { useState } from 'react';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet';

import logo from './logo.svg';

import L from 'leaflet';










function App() {
  const position: any = [37.4168953, -122.0792296];

  const [marker, setMarker] = useState(new L.Icon({
    iconUrl: logo,
    iconRetinaUrl: logo,
    iconSize: new L.Point(60,60),
    className: 'icon-background'
}));

  function Zoomed() {
    const map = useMapEvent('zoomend', (event: any) => {
      console.log(event)
      setMarker(new L.Icon({
        iconUrl: logo,
        iconRetinaUrl: logo,
        iconSize: new L.Point(20,20),
        className: 'icon-background'
    }));
    })
    return null
  }



  return (
    
     
  <MapContainer style={{ width: "100%", height: "100vh" }} center={position} zoom={6}>
    <Zoomed />
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={marker}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}

export default App;
