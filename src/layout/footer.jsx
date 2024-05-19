import React from 'react'
import Logo from '../asset/banner/logo.png'
const Footer = () => {
  return (
    <footer>
    <div className="page_width">
      <div className="inner_footer">
        <div className="grid_column1">
          <img src={Logo} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
        </div>
        <div className="grid_column2">
          <ul>
            <li><a><h3>Company</h3></a></li>
            <li><a href = "#">About us</a></li>
            <li><a href = "#">How to Work</a></li>
            <li><a href = "#">Popular Course</a></li>
            <li><a href = "#">Service</a></li>
          </ul>
        </div>
        <div className="grid_column2">
          <ul>
            <li><a><h3>Courses</h3></a></li>
            <li><a href = "#">Categories</a></li>
            <li><a href = "#">offline Course</a></li>
            <li><a href ="#">Video Courses</a></li>
          </ul>
        </div>
        <div className="grid_column2">
          <ul>
            <li><a><h3>Support</h3></a></li>
            <li><a href ="#"> FAQ</a></li>
            <li><a href ="#">Help center</a></li>
            <li><a href ="#">Career</a></li>
            <li><a href ="#">Privacy</a></li>
          </ul>
        </div>
        <div className="grid_column2">
          <ul>
            <li><a><h3>Contact Info</h3></a></li>
            <li><a href="#">+0913-705-3875</a></li>
            <li><a href="#">example@gmail.com</a></li>
            <li><a href="#">4808 Skinner Hollow Road Days Creek, OR 97429</a></li>
          </ul>
        </div>
      </div>
      {/* <div style="width: 100%; border: 1px solid rgba(183, 183, 183, 1);"></div> */}
      <div className="rights">
        <p> BookStore All right Reserved, 2022</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer