import React, { useState, useEffect, createRef } from 'react'

import './list-styles.css';

import { DownOutlined, SmileOutlined, SearchOutlined} from '@ant-design/icons';
import { Dropdown, Space, Tooltip } from 'antd';
import { Card, Button, Input } from 'antd';


import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { getPlacesData } from '../../api';

const List = ({ places, childClicked, type, setType, rating, setRating }) => {

  const [elRefs, setElRefs] = useState([]);

  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);


  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef()); 
    setElRefs(refs);
  }, [places]);


  return (
    <div className="list-app">
      <div className="list-heading">
        <h2>Explore</h2>
      </div>

      <div className="explore-container">
        <h3>Where do you want to go?</h3> 
          <Search
            placeholder="Enter location"
            enterButton="Search"
            size="small"
            onSearch={onSearch}
          />

        <div className="explore-entries">
          <h3> Select a category </h3>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="option-1">Restaurants</option>
            <option value="option-2">Attractions</option>
          </select>

          <h4> Select a rating </h4>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="r-0">All</option>
            <option value="r-1">Above 3.0</option>
            <option value="r-2">Above 4.0</option>
            <option value="r-3">Above 4.5</option>
          </select>
        </div>

      </div>


      <div className="explore-list">
        {places?.map((place, i) => (
          <PlaceDetails 
            key={i} 
            place={place} 
            selected={Number(childClicked) === i} 
            refProp={elRefs[i]}
          />
        ))}
      </div>

    </div>
  );
};

export default List;