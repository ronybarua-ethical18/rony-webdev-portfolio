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
                        <a href="https://github.com/ronybarua-ethical18">
                            <FontAwesomeIcon className="icon animation-rotate" icon={faGithub}></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/rony-barua/"><FontAwesomeIcon className="icon animation-rotate" icon={faLinkedin}></FontAwesomeIcon></a>
                        <a href="https://www.facebook.com/ronybarua.cmt/"><FontAwesomeIcon className="icon animation-rotate" icon={faFacebook}></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/rony_thesk/"><FontAwesomeIcon className="icon animation-rotate" icon={faInstagram}></FontAwesomeIcon></a>
                        <a href="/"><FontAwesomeIcon className="icon animation-rotate" icon={faGoogle}></FontAwesomeIcon></a>
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