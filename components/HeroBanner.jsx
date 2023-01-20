import React from 'react'
import Slide from 'react-reveal/Slide';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <Slide top>
          <h1>{heroBanner.largeText1}</h1>
        </Slide>
      </div>
    </div>
  )
}

export default HeroBanner