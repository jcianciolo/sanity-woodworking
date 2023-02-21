import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-form">
          <div>
            <h1>Contact Me</h1>
          </div>
          <div className='contact-inputs'>
            <label for="Name">Name</label>
              <input type='text' placeholder='Name'/>
            <label for="Email">Email</label>
              <input type='text' placeholder='Email'/>
            <label for="Subject">Subject</label>
              <textarea type='text' placeholder='Subject'/>
          </div>
          <button type="submit">Submit</button>
        </div>
        <div>
            <img src="https://picsum.photos/500/400" />
        </div>
    </div>
  )
}

export default Contact