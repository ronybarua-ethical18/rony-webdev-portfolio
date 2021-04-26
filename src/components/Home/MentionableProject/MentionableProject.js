import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './MentionableProject.css';
const MentionableProject = (props) => {
    const {
        projectName,
        projectDesc,
        projectImg,
        gitHubLink,
        livesite
    } = props.project;
    return (

        <div className="col-md-4 mb-4">
            <Card className="w-100 shadow p-3" id="project-bg">
                <Card.Img variant="top" src={projectImg.sample} />
                <Card.Body className="p-0">
                    <Card.Title className="mt-2">{projectName}</Card.Title>
                    <p>
                        {projectDesc}
                    </p>
                    <div className="d-flex" id="nav-links">
                        <a href={livesite} className="mr-3 p-0"><FontAwesomeIcon
                            icon={faGithub}
                            className="mr-2"
                        ></FontAwesomeIcon>Live
                                     site link</a>
                        <a href={gitHubLink} className="p-0"><FontAwesomeIcon
                            icon={faGithub}
                            className="mr-2 p-0"
                        ></FontAwesomeIcon>Code link</a>
                    </div>
                </Card.Body>
                <div className=" p-0 d-flex justify-content-between">
                    <span>React</span>
                    <span>Node</span>
                    <span>Mongodb</span>
                    <span>Mongodb</span>
                </div>
            </Card>
        </div>
    );
};

export default MentionableProject;