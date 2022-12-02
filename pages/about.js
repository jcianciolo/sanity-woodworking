import React from 'react'
import AboutComponent from '../components/AboutComponent'
// import { useInView } from 'react-intersection-observer';


const About = () => {

  return (
    <>
        <AboutComponent />
        <div className="aboutComponent2">
            <AboutComponent />
        </div>
        <AboutComponent />
    </>
  )
}

export default About