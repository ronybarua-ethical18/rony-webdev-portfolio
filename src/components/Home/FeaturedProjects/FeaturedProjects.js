import React from 'react';
import './FeaturedProjects.css';
import Training from '../../../images/training.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const FeaturedProjects = (props) => {
    return (
        <div className="main-container common-margin">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 px-3">
                    <h3 className="heading">Featured Projects</h3>
                    <div className="row">
                        <div className="col-md-6" >
                            <div id="projects">
                                <div className="project-image">
                                    <img src={Training} className="img-fluid" alt=""/>
                                </div>
                                <div id ="nav-links" className="core-technologies text-left">
                                    <h4 className="ml-3 title-color">Core Technologies</h4>
                                    <div className="technologies d-flex">
                                        <small>React JS</small>
                                        <small>Firebase</small>
                                        <small>Express JS</small>
                                        <small>Mongo DB</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="project-details text-right">
                                <div className="project-title px-4">
                                    <small className="title-color">Featured Project</small>
                                    <h4>Painting Wizard</h4>
                                </div>
                                <div className="project-description p-4 shadow">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos aliquid inventore cumque harum quaerat excepturi unde. Odio reprehenderit, itaque harum ut vitae similique nam sunt corrupti quae debitis voluptates.</p>
                                </div>
                                <div id="nav-links" className="project-link d-flex my-3 justify-content-end px-2">
                                    <a href="/" className=""><FontAwesomeIcon
                                     icon={faGithub}
                                     className="mr-2"
                                     ></FontAwesomeIcon>Live 
                                     site link</a>
                                    <a href="/"><FontAwesomeIcon 
                                    icon={faGithub}
                                    className="mr-2"
                                    ></FontAwesomeIcon>Code link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;