import React, { useState } from 'react';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet';

import google from './google.svg';
import amazon from './amazon.svg';

import L from 'leaflet';


const data: any = [
  {
    key: 1,
    marker: new L.Icon({
      iconUrl: google,
      iconRetinaUrl: google,
      iconSize: new L.Point(20,20),
      className: 'icon-background'
  }),
    description: "Google",
    point: [37.4168953, -122.0792296]
  },
  {
    key: 2,
    marker: new L.Icon({
      iconUrl: amazon,
      iconRetinaUrl: amazon,
      iconSize: new L.Point(20,20),
      className: 'icon-background'
  }),
    description: 'Amazon',
    point: [47.6227501,-122.3389435,17]
  }
];



function App() {
  const position: any = [37.4168953, -122.0792296];

  const [marker, setMarker] = useState();

  function Zoomed() {
    const map = useMapEvent('zoomend', (event: any) => {
      console.log(event)
    //   setMarker(new L.Icon({
    //     iconUrl: logo,
    //     iconRetinaUrl: logo,
    //     iconSize: new L.Point(20,20),
    //     className: 'icon-background'
    // }));
    });
    return null
  }



  return (
    
     
  <MapContainer style={{ width: "100%", height: "100vh" }} center={position} zoom={6}>
    <Zoomed />
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    { data.map((element: any) => {
        return <Marker key={element.key} position={element.point} icon={element.marker}>
      <Popup>
        {element.description}
      </Popup>
    </Marker>
      })
    }
    
  </MapContainer>
  );
}

export default App;
