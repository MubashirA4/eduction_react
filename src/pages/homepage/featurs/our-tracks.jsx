import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Teacher1 from '../assets/teacher 1.png'
import Teacher2 from '../assets/teacher 2.png'
import Teacher3 from '../assets/teacher 3.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const OurTracks = () => {
    return (
        <div className='page_width'>
            <div className="our-tracks">
                <Card >
                    <Card.Img variant="top" src={Teacher1} />
                    <Card.Body>
                        <Card.Title>
                            <h4>Matthew E. McNatt</h4>
                            <p>Professor @George Brown College</p>
                            </Card.Title>
                        <Card.Text>
                            Ut enim ad minim veniam, quis nost exercitation
                            ullamco laboris nisi ut allquip ex commodo.
                        </Card.Text>
                        <Card.Subtitle>
                            <h5>Engineering physics</h5>
                            <Card.Link>
                                <FaInstagramSquare size={20}/>
                                <FaLinkedin size={20}/>
                            </Card.Link>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src={Teacher1} />
                    <Card.Body>
                        <Card.Title>
                            <h4>Matthew E. McNatt</h4>
                            <p>Professor @George Brown College</p>
                            </Card.Title>
                        <Card.Text>
                            Ut enim ad minim veniam, quis nost exercitation
                            ullamco laboris nisi ut allquip ex commodo.
                        </Card.Text>
                        <Card.Subtitle>
                            <h5>Engineering physics</h5>
                            <Card.Link>
                                <FaInstagramSquare size={20}/>
                                <FaLinkedin size={20}/>
                            </Card.Link>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src={Teacher1} />
                    <Card.Body>
                        <Card.Title>
                            <h4>Matthew E. McNatt</h4>
                            <p>Professor @George Brown College</p>
                            </Card.Title>
                        <Card.Text>
                            Ut enim ad minim veniam, quis nost exercitation
                            ullamco laboris nisi ut allquip ex commodo.
                        </Card.Text>
                        <Card.Subtitle>
                            <h5>Engineering physics</h5>
                            <Card.Link>
                                <FaInstagramSquare size={20}/>
                                <FaLinkedin size={20}/>
                            </Card.Link>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default OurTracks