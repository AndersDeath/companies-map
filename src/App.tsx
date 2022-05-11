import React, { useState } from 'react';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet';

import google from './google.svg';
import amazon from './amazon.svg';
import zoho from './zoho.svg';
import booking from './booking.svg';

import L from 'leaflet';

function createMarker(icon: any, iconSize: any) {
  return new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: new L.Point(iconSize[0], iconSize[1]),
    className: 'icon-background'
})
}

const data: any = [
  {
    key: 1,
    marker: createMarker(google, [20, 20]),
    description: "Google",
    point: [37.4168953, -122.0792296]
  },
  {
    key: 2,
    marker: createMarker(amazon, [20, 20]),
    description: 'Amazon',
    point: [47.6227501, -122.3389435,17]
  },
  {
    key: 3,
    marker: createMarker(zoho, [50, 20]),
    description: 'Zoho',
    point: [13.049620, 80.257290]
  },
  {
    key: 4,
    marker: createMarker(booking, [20, 20]),
    description: 'Booking.com',
    point: [52.365780, 4.898020]
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
