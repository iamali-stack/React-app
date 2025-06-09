import React from 'react'
import './About.css';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
   <>
    <Helmet>
        <title>About</title>
      </Helmet>
   <div
        className="About d-flex justify-content-center align-items-center text-white flex-column"
        style={{ backgroundColor: '#19BC9B', minHeight: '100vh' }}
      >
        <h1>ABOUT COMPONENT</h1>
        <div className="d-flex align-items-center my-3">
          <span style={{ display: 'inline-block', width: 80, height: 4, background: '#fff', marginRight: 10 }}></span>
          <i className="fa fa-star text-white"></i>
          <span style={{ display: 'inline-block', width: 80, height: 4, background: '#fff', marginLeft: 10 }}></span>
        </div>
        <div className="content"
          style={{ gap: '60px' }}
        >
          <div className="left">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="right">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
   </>
  )
}
