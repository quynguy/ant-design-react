import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = () => {
  // const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  
  const coordinates = { lat: 0, lng: 0 };
  
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
       
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map