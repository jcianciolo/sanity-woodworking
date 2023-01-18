import React from 'react'
import Slide from 'react-reveal/Slide';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <Slide top>
          <h3>{heroBanner.midText}</h3>
        </Slide>
      </div>
    </div>
  )
}

export default HeroBanner