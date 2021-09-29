import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "./CloneProjects.css";
const CloneProjects = (props) => {
  const { name, desc, img, codeLink, tech1, tech2, tech3, livesite } =
    props.project;
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 mb-4" id="others">
        <div className="shadow p-3 " id="project-bg">
          <div id="projects" className="shadow mb-3">
              <div>
                <img src={img} className="img-fluid rounded-lg" alt="" />
              </div>
          </div>
          <div className="p-0">
            <h5 className="mt-2">
              <b>{name}</b>
            </h5>
            <p>{desc}</p>
            <div
              className="d-flex p-2 justify-content-between shadow my-2 links"
              id="nav-links"
            >
              <a target="_blank" rel="noreferrer" href={livesite} className="p-0">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="mr-2"
                ></FontAwesomeIcon>
                Live link
              </a>
              <a target="_blank" rel="noreferrer" href={codeLink} className="p-0">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="mr-2 p-0"
                ></FontAwesomeIcon>
                Code link
              </a>
            </div>
          </div>
          <div className=" p-0 d-flex justify-content-between">
            <span>{tech1}</span>
            <span>{tech2}</span>
            <span>{tech3}</span>
          </div>
        </div>
    </div>
  );
};

export default CloneProjects;
