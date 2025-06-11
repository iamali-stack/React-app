import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return (
    <div className={style.contactSection}>
      <div className={style.contactHeader}>
        <h1 className={style.contactTitle}>CONTACT SECTION</h1>
        <div className={style.divider}>
          <span className={style.line}></span>
          <i className={`fa fa-star ${style.star}`}></i>
          <span className={style.line}></span>
        </div>
      </div>
      <div className={style.contactForm}>
        <form>
          <div className={style.inputGroup}>
            <input type="text" placeholder="userName" />
          </div>
          <div className={style.inputGroup}>
            <input type="number" placeholder="userAge" />
          </div>
          <div className={style.inputGroup}>
            <input type="email" placeholder="userEmail" />
          </div>
          <div className={style.inputGroup}>
            <input type="password" placeholder="userPassword" />
          </div>
          <button type="submit" className={style.sendBtn}>send Message</button>
        </form>
      </div>
    </div>
  )
}