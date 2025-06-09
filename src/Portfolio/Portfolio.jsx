import React from 'react'
import './Portfolio.css';
import { Helmet } from 'react-helmet-async';

import poert1 from '../assets/poert1.png';
import poert2 from '../assets/port2.png';
import poert3 from '../assets/port3.png';
export default function Portfolio() {
  const [zoomedImage, setZoomedImage] = React.useState(null);

  const handleImageClick = (imgSrc) => {
    setZoomedImage(imgSrc);
  };

  const handleClose = () => {
    setZoomedImage(null);
  };

  return (
    <>
     <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className="portfolio d-flex justify-content-start align-items-center text-white flex-column">
        <h1>PORTFOLIO COMPONENT</h1>
        <div className="d-flex align-items-center my-3">
          <span style={{ display: 'inline-block', width: 80, height: 4, background: '#2C3E50', marginRight: 10 }}></span>
          <i className="fa fa-star "></i>
          <span style={{ display: 'inline-block', width: 80, height: 4, background: '#2C3E50', marginLeft: 10 }}></span>
        </div>
      </div>

      {zoomedImage && (
        <div
          className="zoomed-image"
      
          onClick={handleClose}
        >
          <div
            style={{ position: 'relative' }}
            onClick={e => e.stopPropagation()}
          >
            <img className="rounded-3" src={zoomedImage} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
          </div>
        </div>
      )}

      <div className="container py-4">
        <div className="row mb-5 g-5">
          <div className="col-md-4">
            <div className="image-container" onClick={() => handleImageClick(poert1)} style={{ cursor: 'pointer' }}>
              <img className="w-100 rounded-3" src={poert1} alt="" />
              <div className="image-overlay rounded-3"><i className="fa fa-plus"></i></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container" onClick={() => handleImageClick(poert2)} style={{ cursor: 'pointer' }}>
              <img className="w-100 rounded-3" src={poert2} alt="" />
              <div className="image-overlay rounded-3"><i className="fa fa-plus"></i></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container" onClick={() => handleImageClick(poert3)} style={{ cursor: 'pointer' }}>
              <img className="w-100 rounded-3" src={poert3} alt="" />
              <div className="image-overlay rounded-3"><i className="fa fa-plus"></i></div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-md-4">
            <div className="image-container" onClick={() => handleImageClick(poert1)} style={{ cursor: 'pointer' }}>
              <img className="w-100 rounded-3" src={poert1} alt="" />
              <div className="image-overlay rounded-3"><i className="fa fa-plus"></i></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container" onClick={() => handleImageClick(poert2)} style={{ cursor: 'pointer' }}>
              <img className="w-100 rounded-3" src={poert2} alt="" />
              <div className="image-overlay rounded-3"><i className="fa fa-plus"></i></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container" onClick={() => handleImageClick(poert3)} style={{ cursor: 'pointer' }}>
              <img className="w-100 rounded-3" src={poert3} alt="" />
              <div className="image-overlay rounded-3"><i className="fa fa-plus"></i></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
