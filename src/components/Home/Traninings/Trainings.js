import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Trainings.css';
import Training from '../../../images/training.jpg';
const Trainings = () => {
    return (
        <div className="Trainings common-margin">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 px-3">
                    <h3 className="right-heading">Trainings Attended</h3>
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 mb-5 ">
                            <div className="training-image">
                                <img src={Training} className="img-thumbnail" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="trainings-title">
                                <h4 className="mb-4">Software Development Trainings</h4>
                                <div className="d-flex">
                                    <FontAwesomeIcon className="mr-3 title-color" icon={faHandPointRight}></FontAwesomeIcon>
                                    <p>I have successfully completed <span className="title-color">Javascript Algorithms and Data Structure Certification</span> course from freecodecamp.org on 2021. Now i am confident about javascript core concepts  and basic data structures and algorithms.</p>
                                </div>
                                <div className="d-flex">
                                    <FontAwesomeIcon className="mr-3 title-color" icon={faHandPointRight}></FontAwesomeIcon>
                                    <p>From solo learn, i have successfully completed <span className="title-color">Python 3</span> tutorial on 2020.</p>
                                </div>
                                <div className="d-flex">
                                    <FontAwesomeIcon className="mr-3 title-color" icon={faHandPointRight}></FontAwesomeIcon>
                                    <p> I have got trained from Beacon IT on <span className="title-color">Responsive Web Design and Front-End Development</span> in 2017.</p>
                                </div>
                                
                                <div className="d-flex">
                                    <FontAwesomeIcon className="mr-3 title-color" icon={faHandPointRight}></FontAwesomeIcon>
                                    <p>Attended classes of <span className="title-color">.NET Program with C#</span> from Desh IT in 2014.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainings;