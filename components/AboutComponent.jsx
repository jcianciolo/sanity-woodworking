import React from 'react'
import { useInView } from 'react-intersection-observer';

const AboutComponent = () => {
    const { ref, inView } = useInView({
        // triggerOnce: true,
        rootMargin: '-300px 0px',
      });
  return (
    
    <div
      ref={ref}
      className={`${inView ? 'show' : 'hidden'}`}
    >
        <div className="about-container">
            <div className="about-description">
                <h1>About me</h1>
                <h4>Alexander Kochman graduated from U.C. Berkeley with a degree in Architecture. His passion for woodworking has driven him to build tables of exceptional quality and character.</h4>
            </div>
            <div>
                <img src="https://picsum.photos/500/400" />
            </div>
        </div>
    </div>
  )
}

export default AboutComponent