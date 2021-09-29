import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Home.css';
import HeaderMain from '../HeaderMain/HeaderMain'
import HeaderContent from '../HeaderContent/HeaderContent';
import About from '../About/About';
import firebase from "firebase/app";
import "firebase/auth";
import { Link } from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll'
import Trainings from '../Traninings/Trainings';
import FeaturedProjectsData from '../FeaturedProjectsData/FeaturedProjectsData';
import MentionableProjects from '../MentionableProjects/MentionableProjects';
import firebaseConfig from '../../../firebase.config'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Blogs from '../Blogs/Blogs';
import CloneProjectsData from '../CloneProjectsData/CloneProjectsData';
const Home = () => {
    // initialize firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    return (
        <div className="main-home">
            <Navbar collapseOnSelect expand="lg" fixed="top" className="mx-4 py-3" id="navbar-bg">
                <Navbar.Brand href="#home" onClick={() => scroll.scrollToTop()}><h2 className="title-color mr-auto animation-fade">R<span className="text-white">o</span>ny</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="">
                    <Nav className="ml-auto d-flex align-items-center" id="nav-links">
                            <div>
                                <Nav className="ml-auto" id="nav-links">
                                    <Link id="anchor" smooth={true} offset={-150} duration={1000} to="about">About</Link>
                                    <Link id="anchor" smooth={true} offset={-150} duration={1000} to="training">Trainings</Link>
                                    <Link id="anchor" smooth={true} offset={-150} duration={1000} to="featured">Featured Projects</Link>
                                    <Link id="anchor" smooth={true} offset={-150} duration={1000} to="other">Other Projects</Link>
                                    <Link id="anchor" smooth={true} offset={-150} duration={1000} to="blogs">Blogs</Link>
                                    <Link id="anchor" smooth={true} offset={-150} duration={1000} to="contact">Contact</Link>
                                </Nav>
                            </div>
                        <div><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1UKfLI2xeaz16Y0RzQrYV-3rcGXdhhTB0/view?usp=sharing" className="link">Resume</a></div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="mt-5"><HeaderContent></HeaderContent></div>
            <HeaderMain></HeaderMain>
            <div id="about"> <About></About></div>
            <div id="training"><Trainings></Trainings></div>
            <div id="featured"><FeaturedProjectsData></FeaturedProjectsData></div>
            <div id="other"><MentionableProjects></MentionableProjects></div>
            <div id="other"><CloneProjectsData></CloneProjectsData></div>
            <div id="blogs"><Blogs></Blogs></div>
            <div id="contact"><Contact></Contact></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;