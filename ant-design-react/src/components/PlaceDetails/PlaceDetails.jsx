import React from 'react'
import './place-styles.css'

import { Card, Space } from 'antd';
import { Button, Flex } from 'antd';

import { getPlacesData } from '/root/SEI/projects/ant-design-react/ant-design-react/src/api/index.js';


const PlaceDetails = ( { place, selected, refProp }) => {
  if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  
  return (

    <Space direction="vertical" size={16}>
        <Card className="cardDetails"
            title={place.name}
            cover={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            style={{width: 350}}
        >
            <p>{place.price_level}</p>
            <p>{place.address}</p>
            <p>{place.ranking}</p>

            <Flex gap="small" wrap="wrap">
                <Button type="link" onClick={() => window.open(place.website, '_blank')}>Read Reviews</Button>
                <Button type="link" onClick={() => window.open(place.website, '_blank')}>Restaurant Website</Button>
            </Flex>

        </Card>
    </Space>

  )
}

export default PlaceDetails;