import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { useInView } from 'react-intersection-observer';


const Product = ({ product: { image, name, slug, price } }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: .1,
  });

  return (
    <div
      ref={ref}
      className={`${inView ? 'show' : 'hidden'}`}
    >
      <div className="product-card">
        <Link href={`/product/${slug.current}`}>
          <div>
            <img 
              src={urlFor(image && image[0])} 
              className="product-image"
            />
            <p className="product-name">{name}</p>
          </div>
        </Link>
      </div>
      
    </div>
  )
}

export default Product