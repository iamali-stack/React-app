import React from 'react'
import style from './About.module.css';

export default function About() {
  return (
    <div
      className={`${style.about} d-flex justify-content-center align-items-center text-white flex-column`}
      style={{ backgroundColor: '#19BC9B', minHeight: '100vh' }}
    >
      <h1 className={style.aboutTitle}>ABOUT COMPONENT</h1>
      <div className="d-flex align-items-center my-3">
        <span className={style.aboutLine} style={{ display: 'inline-block', width: 80, height: 4, background: '#fff', marginRight: 10 }}></span>
        <i className="fa fa-star text-white"></i>
        <span className={style.aboutLine} style={{ display: 'inline-block', width: 80, height: 4, background: '#fff', marginLeft: 10 }}></span>
      </div>
      <div className={style.content} style={{ gap: '60px' }}>
        <div className={style.left}>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className={style.right}>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  )
}
