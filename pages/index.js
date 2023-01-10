import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className="products-heading">
        <h2>AJK Woodworking</h2>
        <h5>AJK Woodworking</h5>
        <h5>---------- EST 2014 ----------</h5>
        <h2>EXCEPTIONAL HANDCRAFTED TABLES AND FURNITURE</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita distinctio magnam incidunt quaerat ducimus modi similique laboriosam quam ab. Molestiae omnis quibusdam maxime quasi, autem exercitationem sit porro magnam sapiente perferendis! Eligendi minima perspiciatis earum. Neque ipsa, deserunt id quasi similique fugit aperiam inventore laudantium recusandae illo at quidem dolorem!</p>
        <h2>Our Tables</h2> 
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