import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { getPlacesData } from './api/index.js';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';
import PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx';

import { Col, Row } from 'antd';

function App() {

  const [places, setPlaces] = useState();

  return (
    <>
      <Header />
      <Row style={{ marginTop: '10px' }}>
        <Col span={18} push={6}>
          <Map 
            places={places}
          />
        </Col>
        <Col span={6} pull={18}>
          <List 
            places={places}
          />
        </Col>
      </Row>
    </>
  )
}

export default App;
