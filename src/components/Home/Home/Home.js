import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Home.css';
import HeaderMain from '../HeaderMain/HeaderMain'
import HeaderContent from '../HeaderContent/HeaderContent';
import About from '../About/About';
import firebase from "firebase/app";
import Fade from 'react-reveal/Fade';
import "firebase/auth";
import ScrollspyNav from "react-scrollspy-nav";
import Trainings from '../Traninings/Trainings';
import FeaturedProjectsData from '../FeaturedProjectsData/FeaturedProjectsData';
import MentionableProjects from '../MentionableProjects/MentionableProjects';
import firebaseConfig from '../../../firebase.config'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Blogs from '../Blogs/Blogs';
const Home = () => {
    // initialize firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" fixed="top" className="mx-4 py-3" id="navbar-bg">
                <Navbar.Brand href="#home"><h2 className="title-color animation-fade">R<span className="text-white">o</span>ny</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" id="nav-links">
                        <ScrollspyNav
                            className="scrolling"
                            scrollTargetIds={["about", "training", "featured", "other", "contact"]}
                            activeNavClass="is-active"
                            headerBackground="true"
                        >
                            <a href="#about">About</a>
                            <a href="#training">Trainings</a>
                            <a href="#featured">Featured Projects</a>
                            <a href="#other">Other Projects</a>
                            <a href="#contact">Contact</a>
                            <a href="#contact" className="link">Resume</a>
                        </ScrollspyNav>
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
            <Fade bottom>
                <div className="mt-5"><HeaderContent></HeaderContent></div>
                <HeaderMain></HeaderMain>
                <div id="about"> <About></About></div>
                <div id="training"><Trainings></Trainings></div>
                <div id="featured"><FeaturedProjectsData></FeaturedProjectsData></div>
                <div id="other"><MentionableProjects></MentionableProjects></div>
                <div id="blogs"><Blogs></Blogs></div>
                <div id="contact"><Contact></Contact></div>
                
                <Footer></Footer>
            </Fade>
        </div>
    );
};

export default Home;