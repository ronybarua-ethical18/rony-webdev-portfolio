import React from 'react';
import './FeaturedProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const FeaturedProjects = (props) => {
    const {
        projectId,
        projectName,
        projectDesc,
        projectImg,
        clientCode,
        serverCode,
        liveSite
    } = props.project;
    console.log(projectImg)
    return (
        <div className="row d-flex" id="projectList">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center mb-5" id={`order-${projectId}`}>
                <div id="projects">
                    <div className="project-image">
                        <img src={projectImg} className="img-fluid img-responsive rounded-lg" alt="" />
                    </div>
                    <div id={`projectId-${projectId}`} className="core-technologies text-left">
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <div className="project-details text-right" id={`projectId-${projectId}`}>
                    <div className="project-title px-4">
                        <small className="title-color">Featured Project</small>
                        <h4>{projectName}</h4>
                    </div>
                    <div className="project-description p-4 shadow rounded-lg">
                        <p>{projectDesc}</p>
                        <div className="technologies d-flex flex-wrap justify-content-center py-2">
                            <small>React JS</small>
                            {projectId === 1 ? <small>Stripe</small> : projectId === 3 ? <small>Redux</small>: <small>Firebase</small>}
                            <small>Express JS</small>
                            <small>Mongo DB</small>
                        </div>
                    </div>
                    <div id="nav-links" className="py-2 d-flex flex-wrap justify-content-center">
                        <a target="_blank" rel="noreferrer" href={liveSite} className=""><FontAwesomeIcon
                            icon={faGithub}
                            className="mr-2"
                        ></FontAwesomeIcon>Live</a>
                        <a target="_blank" rel="noreferrer" href={clientCode}><FontAwesomeIcon
                            icon={faGithub}
                            className="mr-2"
                        ></FontAwesomeIcon>Client code</a>
                        <a target="_blank" rel="noreferrer" href={serverCode}><FontAwesomeIcon
                            icon={faGithub}
                            className="mr-2"
                        ></FontAwesomeIcon>Server code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;