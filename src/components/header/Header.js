import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MainNavBar from '../mainNavBar/MainNavbar'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png"
          alt="Logo SportSee"
        />
      </Link>
      <MainNavBar />
    </div>
  )
}

export default Header
