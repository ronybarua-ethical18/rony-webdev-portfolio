import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Home.css';
import HeaderMain from '../HeaderMain/HeaderMain'
import HeaderContent from '../HeaderContent/HeaderContent';
import About from '../About/About';
import Trainings from '../Traninings/Trainings';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
const Home = () => {
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
            <FeaturedProjects></FeaturedProjects>
        </div>
    );
};

export default Home;