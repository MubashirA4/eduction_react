import React from 'react'
import Logo1 from '../../../asset/Tracks/bulb.png'
import Logo2 from '../../../asset/Tracks/arrow.png'
import Logo3 from '../../../asset/Tracks/Group 337.png'
import Logo4 from '../../../asset/Tracks/Group 338.png'
import Logo5 from '../../../asset/Tracks/Group 339.png'
import { GoClock } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";


const Tracks = () => {
    return (
        <div className="tracks">
            <div className="page_width">
                <div className="inner_tracks">
                    <div className="track_content">
                        <div className="content">
                            <div className="content-detail">
                                <h2>Our Tracks</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div class="card">
                            <img src={Logo3} alt="UI/UX Design Course Image"></img>
                            <div class="card-details">
                                <span class="tag">UI/UX Design</span>
                                <h2 class="card-title">UI/UX Design for Beginners</h2>
                                <p class="price">$98</p>
                                <hr />
                                <div class="card-info">
                                    <p class="duration">
                                        <span><GoClock /></span> 22hr 30min</p>
                                    <p class="enrolled"><span><GoDeviceCameraVideo /></span> 34 Courses</p>
                                    <p class="sales"><span><MdOutlineFileDownload /></span> 250 Sales</p>
                                </div>
                                <button class="join-course">Join Course</button>
                            </div> 
                        </div>
                        <div class="card">
                            <img src={Logo4} alt="UI/UX Design Course Image"></img>
                            <div class="card-details">
                                <span class="tag">UI/UX Design</span>
                                <h2 class="card-title">UI/UX Design for Beginners</h2>
                                <p class="price">$98</p>
                                <hr />
                                <div class="card-info">
                                    <p class="duration"><span><GoClock /></span> 22hr 30min</p>
                                    <p class="enrolled"><span><GoDeviceCameraVideo /></span> 34 Courses</p>
                                    <p class="sales"><span><MdOutlineFileDownload /></span> 250 Sales</p>
                                </div>
                                <button class="join-course">Join Course</button>
                            </div>
                        </div>
                        <div class="card">
                            <img src={Logo5} alt="UI/UX Design Course Image"></img>
                            <div class="card-details">
                                <span class="tag">UI/UX Design</span>
                                <h2 class="card-title">UI/UX Design for Beginners</h2>
                                <p class="price">$98</p>
                                <hr />
                                <div class="card-info">
                                    <p class="duration"><span><GoClock /></span> 22hr 30min</p>
                                    <p class="enrolled"><span><GoDeviceCameraVideo /></span> 34 Courses</p>
                                    <p class="sales"><span><MdOutlineFileDownload /></span> 250 Sales</p>
                                </div>
                                <button class="join-course">Join Course</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracks