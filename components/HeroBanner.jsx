import React from 'react'
import Link from 'next/link'
import Slide from 'react-reveal/Slide';

import { urlFor } from '../lib/client'

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

        // <div className="desc">
        //   <h5>Description</h5>
        //   <p>{heroBanner.desc}</p>
        // </div>



      // <div>
      //   <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
      // </div>

    //   <Link href={`/product/${heroBanner.product}`}>
    //   <button type="button">{heroBanner.buttonText}</button>
    // </Link>