import React, { useState } from 'react'

import './list-styles.css';

import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const List = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="list-app">
      <div className="list-heading">
        <h2>Explore</h2>
        <p>Find things to do and places to eat nearest to you.</p>
      </div>

      <div className="explore-container">
        <h3> Select a category </h3>
        <select value={selectedOption} onChange={handleChange}>
          <option value="option-1">Restaurants</option>
          <option value="option-2">Attractions</option>
        </select>

        <h4> Select a rating </h4>
        <select value={selectedOption} onChange={handleChange}>
          <option value="r-0">All</option>
          <option value="r-1">Above 3.0</option>
          <option value="r-2">Above 4.0</option>
          <option value="r-3">Above 4.5</option>
        </select>
       
        
      </div>
    </div>
  )
}

export default List