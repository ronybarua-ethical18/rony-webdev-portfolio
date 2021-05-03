import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './MentionableProject.css';
const MentionableProject = (props) => {
    const {
        projectName,
        projectDesc,
        projectImg,
        gitHubLink,
        tech1,
        tech2,
        tech3,
        livesite
    } = props.project;
    return (

        <div className="col-lg-6 col-md-6 col-sm-12 mb-4 w-100 h-100" id="others">
            <CardDeck>
                <Card className="w-100 shadow p-3 h-100" id="project-bg">
                    <div id="card-img" className="shadow mb-3">
                        <img src={projectImg} className="img-fluid rounded-lg" alt="" />
                    </div>
                    <Card.Body className="p-0">
                        <h5 className="mt-2"><b>{projectName}</b></h5>
                        <p>
                            {projectDesc}
                        </p>
                        <div className="d-flex p-2 justify-content-between shadow my-2 links" id="nav-links">
                            <a href={livesite} className="p-0"><FontAwesomeIcon
                                icon={faGithub}
                                className="mr-2"
                            ></FontAwesomeIcon>Live link</a>
                            <a href={gitHubLink} className="p-0"><FontAwesomeIcon
                                icon={faGithub}
                                className="mr-2 p-0"
                            ></FontAwesomeIcon>Code link</a>
                        </div>
                    </Card.Body>
                    <div className=" p-0 d-flex justify-content-between">
                        <span>{tech1}</span>
                        <span>{tech2}</span>
                        <span>{tech3}</span>
                    </div>
                </Card>
            </CardDeck>
        </div>
    );
};

export default MentionableProject;