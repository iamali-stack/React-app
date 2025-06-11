import React from 'react'
import style from './Footer.module.css';



export default function Footer() {
  return (
    <div className=" text-white footer w-100" style={{ backgroundColor: '#2C3D4F' }}>
      <div className="container py-5">
        <div className="row text-center">
          
          {/* Location Card */}
          <div className="col-md-4 mb-4">
            <div className="card text-white" style={{ backgroundColor: 'transparent', border: 'none' }}>
              <div className="card-body text-center">
                <h3 className="card-title text-uppercase mb-3">Location</h3>
                <p className="card-text">
                  2215 John Daniel Drive<br />
                  Clark, MO 65243
                </p>
              </div>
            </div>
          </div>

          {/* Around the Web Card */}
          <div className="col-md-4 mb-4">
            <div className={`card text-white ${style.cardBg}`} style={{ border: 'none' }}>
              <div className="card-body text-center">
                <h3 className="card-title text-uppercase mb-3">Around the Web</h3>
                <div className="d-flex justify-content-center">
                  <a href="#" className={`${style.socialIcon} me-3`}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className={`${style.socialIcon} me-3`}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className={`${style.socialIcon} me-3`}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className={style.socialIcon}>
                    <i className="fas fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-white" style={{ backgroundColor: 'transparent', border: 'none' }}>
              <div className="card-body text-center">
                <h3 className="card-title text-uppercase mb-3">About Freelancer</h3>
                <p className="card-text">
                  Freelance is a free to use, licensed Bootstrap theme created by Route
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center py-4" style={{ backgroundColor: '#1A252F' }}>
        <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}