import React from 'react'

import { NavLink } from 'react-router-dom'
import './Navbar.css';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-custom fixed-top py-4 ">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            <h2 className="mb-0 fw-bold">START FRAMEWORK</h2>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "nav-link  active" : "nav-link "
                }
                  to="/about">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "nav-link  active" : "nav-link "
                }
                  to="/portfolio">PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "nav-link  active" : "nav-link "
                }
                  to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
