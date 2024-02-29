import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import { getPlacesData } from './api/index.js';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';
import PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx';

import { Col, Row } from 'antd';

function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState();

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
  }, []);

  useEffect(()=> {
    const filteredPlaces = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filteredPlaces);
  },[rating]);

  useEffect(() => {
    setIsLoading(true);
    // console.log(coordinates, bounds);
    if (bounds) {
    getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
            // console.log(data);
            setPlaces(data);
            setFilteredPlaces([]);
            setIsLoading(false);
        });
    }
  }, [type, coordinates, bounds]);

  return (
    <>
      <Header />
      <Row style={{ marginTop: '10px' }}>
        <Col span={18} push={6}>
          <Map 
            places={filteredPlaces.length ? filteredPlaces : places}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
          />
        </Col>
        <Col span={6} pull={18}>
          <List 
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Col>
      </Row>
    </>
  )
}

export default App;
