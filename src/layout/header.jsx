import React from 'react'
import Logo from '../asset/banner/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="page_width">
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav_links">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about_us"}>About us</Link ></li>
          <li><Link to={"/courses"}>Courses</Link></li>
          <li><Link to={"/services"}>Our services</Link></li>
          <li><Link to={"Contact_us"}>Contact us</Link></li>
          <li className="btn_signin"><Link to={"Sign_up"}>Sign in</Link></li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header