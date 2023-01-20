import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'
import Image from 'next/image'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className="products-heading">
        <Image src="/../public/AJK4.jpg" height="200" width="200" />
        <h1>AJK ART & WOOD</h1>
        <h4 className="text-divider">EST 2014</h4>
        <h2>EXCEPTIONAL HANDCRAFTED TABLES AND FURNITURE</h2>
        <p>I'm Alex, a woodworker, designer and artist from the Bay Area. I specialize in customized, hand crafted wood design and furniture. My designs are conceptualized on paper, translated and designed in AutoCAD and Rhinoceros, and assembled in my woodworking studio. I love designing and assembling furniture and other goods to fit people's spaces and lifestyles. I work with solid wood and enjoy mixing and matching species for artful juxtaposition. I pick each board individually in San Francisco to hand select the most interesting parts of the tree with the most beautiful grain and color.  I'd be happy to work with you to design the piece of your dreams; whether it be art, furniture, or a mixture of the two. I guarantee if you work with me you will have the ability to explore your aesthetic preferences with the guidance of an experienced designer, woodworker, artist, and architect.</p>
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

  const logoQuery = "*[_type == 'logo']";
  const logoData = await client.fetch(logoQuery);

  return {
    props: { products, bannerData, logoData }
  }
}
export default Home
 

      // <FooterBanner footerBanner={bannerData && bannerData[0]} />
// 

//  Old react-reveal method
// {products?.map((product) => <Slide left><Product key={product._id} product={product} /></Slide>)} 
// 