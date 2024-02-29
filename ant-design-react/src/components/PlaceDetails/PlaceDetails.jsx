import React from 'react'
import './place-styles.css'

import { Card } from 'antd';
import { Button, Flex } from 'antd';

const PlaceDetails = ( { place }) => {

  return (

    <Space direction="vertical" size={16}>
    <Card className="cardDetails"
        title={place.name}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
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

export default PlaceDetails