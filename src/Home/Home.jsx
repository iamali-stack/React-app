import React from 'react'
import './Home.css';
import avatar from '../assets/avataaars.svg';
import { Helmet } from 'react-helmet-async';


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div
        className="home d-flex justify-content-center align-items-center text-white flex-column"
        style={{ backgroundColor: '#19BC9B', minHeight: '100vh' }}
      >
        <img src={avatar} alt="Avatar" />
        <h1>START FRAMEWORK</h1>
        <div className="d-flex align-items-center my-3">
          <span style={{ display: 'inline-block', width: 80, height: 4, background: '#fff', marginRight: 10 }}></span>
          <i className="fa fa-star text-white"></i>
          <span style={{ display: 'inline-block', width: 80, height: 4, background: '#fff', marginLeft: 10 }}></span>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
