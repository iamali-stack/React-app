import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>

      <div className="contact-section">
        <div className="contact-header">
          <h1>CONTACT SECTION</h1>
          <div className="divider">
            <span className="line"></span>
            <i className="fa fa-star"></i>
            <span className="line"></span>
          </div>
        </div>
        
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" placeholder="userName" />
            </div>
            <div className="input-group">
              <input type="number" placeholder="userAge" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="userEmail" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="userPassword" />
            </div>
            <button type="submit" className="send-btn">send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}