import React from 'react'
import Image1 from '../assets/Ellipse 34.png'
import Image2 from '../assets/Ellipse 35.png'
import Image3 from '../assets/Ellipse 36.png'

const Reviews = () => {
  return (
    <div className="reviews">
        <div className="page_width">
            <div className="reviews_header">
            <h3>What student’s say</h3>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="reviews_content">
                <div className="cards">
                    <p>“Teachings of the great explore of truth, 
                        the master-builder of human happiness. 
                        no one rejects,dislikes, or avoids pleasure 
                        itself, pleasure itself”</p>
                    <div className="profile">
                        <img src={Image1} alt="" />
                        <div className="content">
                            <h4>Finlay Kirk</h4>
                            <p>Web Developper</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <p>“Complete account of the system and
                        expound the actual Contrary to popular
                        belief, Lorem Ipsum is not simply 
                        random text. It has roots”</p>
                        <div className="profile">
                        <img src={Image2} alt="" />
                        <div className="content">
                            <h4>Dannette P. Cervantes</h4>
                            <p>Web Design</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <p>“There are many variations of passages
                        of Lorem Ipsum available, but the majority
                        have suffered alteration in some form,
                        by injected humour”</p>
                        <div className="profile">
                        <img src={Image3} alt="" />
                        <div className="content">
                            <h4>Clara R. Altman</h4>
                            <p>UI&UX Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews