import React from 'react'
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-md ${style.navbarCustom} fixed-top py-4`}>
      <div className="container">
        <NavLink className={style.navbarBrand} to="/">
          <h2 className="mb-0 fw-bold">START FRAMEWORK</h2>
        </NavLink>

        <button
          className={style.navbarToggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={style.navbarTogglerIcon}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `${style.navLink} ${style.fwBold} ${isActive ? style.active : ''}`
                }
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `${style.navLink} ${style.fwBold} ${isActive ? style.active : ''}`
                }
                to="/portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `${style.navLink} ${style.fwBold} ${isActive ? style.active : ''}`
                }
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
