import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HeaderMain.css';
const Navbar = () => {
    return (
        <div>
            <div className="social-icons">
                <div className="icons">
                    <div className="social-links">
                        <FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon>
                        <FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon>
                        <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
                        <FontAwesomeIcon className="icon" icon={faGoogle}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className="personal-email">
                <div className="email">
                    <div className="email-link" id="nav-links">
                        <a href="/">ronybarua.ethical18@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;