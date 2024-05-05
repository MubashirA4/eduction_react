import React from 'react'
import Logo from '../../../asset/banner/OBJECTS.png'
import Logo1 from '../../../asset/banner/online-test 1.png'  
import Logo2 from '../../../asset/banner/exam 1.png'  
import Logo3 from '../../../asset/banner/certification 1.png'  
const Banner = () => {
  return (
    <div className='banner'>
        <div className='page_width'>
            <div className="banner_inner">
                <div className="content">
                    <h2>The <span>Smart</span><br/>
                        Choice for <span>Future</span>
                    </h2>
                    <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
                    <div className="search_box">
                        <input type="text" placeholder='Search for a location...' className='search_name_input' />
                        <button>Continue</button>
                    </div>
                </div>
                <div className="banner_image">
                        <img src={Logo} alt="" width="100%"/>
                </div>
            </div>
            <div className="slide">
                   <div className="left">
                        <div className="left_image">
                        <img src={Logo1} alt="" />
                        </div>
                        <div className="left_content">
                        <h3>Learn The Latest Skills</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                   </div>
                   <div className="center">
                        <div className="center_image">
                            <img src={Logo2} alt="" />
                        </div>
                        <div className="center_content">
                            <h3>Get Ready For a carer</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                   </div>
                   <div className="right">
                        <div className="right_image">
                            <img src={Logo3} alt="" />
                        </div>
                        <div className="right_content">
                            <h3>Earn a Certificate</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default Banner