import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner  } from '../components'
import Image from 'next/image'
import Introduction from '../components/Introduction'

const Home = ({ products, bannerData, intro }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <Introduction introduction={intro[0]} />



      <div className="products-section">
        <h1>OUR FURNITURE</h1>
        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product}/>)} 
        </div>
      </div>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  const introductionQuery = "*[_type == 'introduction']";
  const intro = await client.fetch(introductionQuery);

  return {
    props: { products, bannerData, intro }
  }
}
export default Home
 

      // <FooterBanner footerBanner={bannerData && bannerData[0]} />
// 

//  Old react-reveal method
// {products?.map((product) => <Slide left><Product key={product._id} product={product} /></Slide>)} 
// 