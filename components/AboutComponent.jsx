import React from 'react'
import { useInView } from 'react-intersection-observer';

const AboutComponent = () => {
    const { ref, inView } = useInView({
        // triggerOnce: true,
        rootMargin: '-100px 0px',
        // threshold: .2,
      });
  return (
    
    <div
      ref={ref}
      className={`${inView ? 'show' : 'hidden'}`}
    >
        <div className="about-container">
            <div className="about-description">
                <h2>Alexander Kochman graduated from U.C. Berkeley with a degree in Architecture. His passion for woodworking has driven him to build tables of exceptional quality and character.</h2>
            </div>
            <div className="about-image">
                <img src="https://picsum.photos/1400/1200" />
            </div>
        </div>
    </div>
  )
}

export default AboutComponent