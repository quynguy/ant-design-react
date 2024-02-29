import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = ( { setCoordinates, coordinates, setBounds, places, setChildClicked }) => {
  // const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyATd7ccJf0WZjdcnbeUDeZrXQxtGDT8tIM' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => {
          console.log("Rendering LocationOnOutlinedIcon for place:", place); 
            return (
              <div
                className="marker-Container"
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
              >
                {/* <span class="material-symbols-outlined">location_on</span> */}
                <img
                  className="pointer"
                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt={place.name}
                  />
              </div>
            );
          })}
      </GoogleMapReact>
    </div>
  );
};

export default Map