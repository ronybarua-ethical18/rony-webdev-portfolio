import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Home.css';
import HeaderMain from '../HeaderMain/HeaderMain'
import HeaderContent from '../HeaderContent/HeaderContent';
import About from '../About/About';
import firebase from "firebase/app";
import "firebase/auth";
import Trainings from '../Traninings/Trainings';
import FeaturedProjectsData from '../FeaturedProjectsData/FeaturedProjectsData';
import MentionableProjects from '../MentionableProjects/MentionableProjects';
import firebaseConfig from '../../../firebase.config'
const Home = () => {
    // initialize firebase
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed = 'top' className="mx-4 py-3" id="navbar-bg">
                <Navbar.Brand href="#home"><h2>Rony</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" id="nav-links">
                        <a href="#about">About</a>
                        <a href="#about">Trainings</a>
                        <a href="#experience">Experience</a>
                        <a href="#work">Work</a>
                        <a href="#contact">Contact</a>
                    </Nav>
                    <button>Resume</button>
                </Navbar.Collapse>
            </Navbar>
            <HeaderContent></HeaderContent>
            <HeaderMain></HeaderMain>
            <About></About>
            <Trainings></Trainings>
            <FeaturedProjectsData></FeaturedProjectsData>
            <MentionableProjects></MentionableProjects>
        </div>
    );
};

export default Home;