import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-form">
            <h1>Contact Me</h1>
            <input type='text' placeholder='text'/>
            <input type='text' placeholder='text'/>
            <input type='text' placeholder='text'/>
        </div>
        <div>
            <img src="https://picsum.photos/500/400" />
        </div>
    </div>
  )
}

export default Contact