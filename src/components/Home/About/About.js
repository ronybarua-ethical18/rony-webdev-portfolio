import { faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCertificate, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profileImg from '../../../images/profileImg.jpg';
import './About.css';
const About = () => {
    return (
        <div className="common-margin main-container w-100">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 px-3">
                    <h3 className="heading">About Me</h3>
                    <div className="row no-gutters d-flex justify-content-center">
                        <div className="col-md-7 mb-5">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iusto commodi incidunt tempore pariatur consequuntur quae, reiciendis, facilis optio quos nesciunt, sint nihil laboriosam magni hic! Nam quam optio quaerat.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium deserunt ex id neque doloremque qui nisi dolorem laborum dolore nobis, earum velit, maxime necessitatibus!</p>
                            <p><strong className="title-color">Here are a few technologies I've been working with recently:</strong></p>
                            <div className="technologies d-flex ">
                                <div className="front-end">
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>HTML5</p>
                                    <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>CSS3</p>
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>Bootstrap 4</p>
                                    <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>React JS</p>

                                    <button>Download Resume</button>
                                </div>
                                <div className="back-end">
                                <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>Firebase</p>
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>NodeJS</p>
                                    <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>Express JS</p>
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 image-container d-flex justify-content-end">
                           <div className="profile-image"> <img src={profileImg} id="profileImg" className="img-thumbnail" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;