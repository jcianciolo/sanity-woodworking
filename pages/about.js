import React from 'react'
import AboutComponent from '../components/AboutComponent'
// import { useInView } from 'react-intersection-observer';


const About = () => {

  return (
    <> 
        <div className="aboutComponent1">
            <AboutComponent />
        </div>
        <div className="aboutComponent2">
            <AboutComponent />
        </div>
        <div className="aboutComponent3">
            <AboutComponent />
        </div>
        <div className="aboutComponent4">
            <AboutComponent />
        </div>
        
    </>
  )
}

export default About