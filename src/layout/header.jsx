import React, { useState } from 'react'
import './css/style.css'
import Logo from '../asset/banner/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = ({ bg, img }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [color, setColor] = useState("")

  return (
    <div className={`${bg ? 'active_navbar' : ''}`}>
      <header className="page_width">
        <div className="navbar" style={{ background: color }}>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="bar_menu" onClick={() => setShowMenu(!showMenu)}>
            {showMenu == true ? <FaTimes /> : <FaBars />}
          </div>
          <div className={`nav_links ${showMenu == true ? 'show_menu' : 'hide_menu'}`}>
            <ul>
              <li><Link to={"/"} className='btn'>Home</Link></li>
              <li><Link to={"/about_us"} className='btn'>About us</Link ></li>
              <li><Link to={"/courses"} className='btn'>Courses</Link></li>
              <li><Link to={"/services"} className='btn'>Our services</Link></li>
              <li><Link to={"/Contact_us"} className='btn'>Contact us</Link></li>
              <li><Link to={"/javascript"} className='btn'>Javascript</Link></li>
              <li className="btn_signin btn"><Link to={"sign_in"}>Sign in</Link></li>
            </ul>
          </div>
          {/* <div className='toggle'>
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" className='button'></label>
          </div> */}
        </div>
      </header>
    </div>

  )
}

export default Header