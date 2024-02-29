import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import List from './components/List/List.jsx';

import { Col, Row } from 'antd';

function App() {

  return (
    <>
      <Header />
      <Row style={{ marginTop: '10px' }}>
        <Col span={18} push={6}>
          Left Side
        </Col>
        <Col span={6} pull={18}>
          <List />
        </Col>
      </Row>
    </>
  )
}

export default App;
