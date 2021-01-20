import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
          <div className="cont-logo">
            <p className="txt-logo">Grazie a</p>
            <a href="https://thecocktaildb.com/" target="_blank"><img src={logo} alt="cocktail db logo" className="logo" /></a>
          </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              Dicerie
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
