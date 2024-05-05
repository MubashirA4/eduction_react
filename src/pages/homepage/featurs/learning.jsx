import React from 'react'
import Logo from '../../../asset/Learning/learning.png'
import Logo1 from '../../../asset/Learning/hearts 1.png'
import Logo2 from '../../../asset/Learning/jigsaw 1.png'
const Learning = () => {
  return (
    <div className="learning">
        <div className="page_width">
            <div className="inner_learning">
                <img src={Logo} alt="" />
                <div className="learning_content">
                    <h2>Premium <span>Learning</span> Experience</h2>
                    <div className="learning_points">
                        <img src={Logo1} alt="" />
                        <h3>Easily Accessible</h3>
                        <p>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>
                    <div className="learning_points">
                    <img src={Logo2} alt="" />
                        <h3>Fun learning expe</h3>
                        <p>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Learning