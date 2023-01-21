import React from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'


const Introduction = ({ introduction }) => {
  return (
    <div className="products-heading">
        <img src={urlFor(introduction.logo)} height="200" width="200" />
        <h1>{introduction.title}</h1>
        <h4 className="text-divider">{introduction.foundedOn}</h4>
        <h2>{introduction.subheader}</h2>
        <p>{introduction.introParagraph}</p>
      </div>
  )
}

export default Introduction