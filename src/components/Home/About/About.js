import { faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCertificate, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profileImg from '../../../images/pro.png';
import './About.css';
const About = () => {
    return (
        <div className="common-margin main-container w-100">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 px-3">
                    <h3 className="heading">About Me</h3>
                    <div className="row no-gutters d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-12 col-sm-12 mb-5">
                            <p>I enjoy developing applications using modern technologies. My interest in web development started in 2017 and my main focus these days is building an accessible, inclusive, and modern application using a powerful stack.</p>
                            <p>I am familiar with browser dev tools and debugging and it’s helping me to find out the bugs in an application. I am constantly seeking out new technologies and staying up-to-date on trends to be a professional developer. </p>
                            <p><strong className="title-color">Here are a few technologies I've been working with recently:</strong></p>
                            <div className="technologies d-flex mb-3">
                                <div className="front-end mr-3" id="nav-links">
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>Next JS</p>
                                    <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>Tailwind CSS</p>
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>TypeScript</p>
                                    <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>Redux</p>
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>Material UI</p>
                                   
                                </div>
                                <div className="back-end">
                                    <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>Mongoose</p>
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>NodeJS</p>
                                    <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>Express JS</p>
                                    <p><FontAwesomeIcon className="mr-3 title-color" icon={faCertificate}></FontAwesomeIcon>Socket IO</p>
                                    <p><FontAwesomeIcon className="mr-3" icon={faCertificate}></FontAwesomeIcon>GraphQL</p>
                                </div>
                            </div>
                            <div className="mt-4"> <a className="link" href="https://drive.google.com/file/d/1UKfLI2xeaz16Y0RzQrYV-3rcGXdhhTB0/view?usp=sharing">View Resume</a></div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 image-container d-flex justify-content-center">
                           <div className="profile-image"> <img src={profileImg} id="profileImg" className="img-fluid" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;