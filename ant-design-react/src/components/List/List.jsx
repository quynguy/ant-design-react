import React, { useState } from 'react'

import './list-styles.css';

import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Card } from 'antd';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places }) => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, seSelectedRating] = useState('');
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleRatingChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="list-app">
      <div className="list-heading">
        <h2>Explore</h2>
        <p>Find things to do and places to eat nearest to you.</p>
      </div>

      <div className="explore-container">
        <h3> Select a category </h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="option-1">Restaurants</option>
          <option value="option-2">Attractions</option>
        </select>

        <h4> Select a rating </h4>
        <select value={selectedRating} onChange={handleRatingChange}>
          <option value="r-0">All</option>
          <option value="r-1">Above 3.0</option>
          <option value="r-2">Above 4.0</option>
          <option value="r-3">Above 4.5</option>
        </select>
      </div>

      <div className="explore-list">
      {places?.map((place, i) => (
          <PlaceDetails key={place.id} place={place} />
        ))}
      </div>

    </div>
  );
};

export default List;