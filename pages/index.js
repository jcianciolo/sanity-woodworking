import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'
import Image from 'next/image'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className="products-heading">
        <Image src="/../public/ajk3.jpg" height="200" width="200" />
        <h1>AJK Woodworking</h1>
        <h4 className="text-divider">EST 2014</h4>
        <h2>EXCEPTIONAL HANDCRAFTED TABLES AND FURNITURE</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita distinctio magnam incidunt quaerat ducimus modi similique laboriosam quam ab. Molestiae omnis quibusdam maxime quasi, autem exercitationem sit porro magnam sapiente perferendis! Eligendi minima perspiciatis earum. Neque ipsa, deserunt id quasi similique fugit aperiam inventore laudantium recusandae illo at quidem dolorem!</p>
      </div>
      
      
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)} 
      </div>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home
 

      // <FooterBanner footerBanner={bannerData && bannerData[0]} />
// 

//  Old react-reveal method
// {products?.map((product) => <Slide left><Product key={product._id} product={product} /></Slide>)} 
// 