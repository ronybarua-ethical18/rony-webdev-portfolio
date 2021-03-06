import React from 'react';
import './HeaderContent.css';
import Typed from 'react-typed';
import Zoom from 'react-reveal/Zoom';
const HeaderContent = () => {
    return (
        <div className="main-container mt-5">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 py-5 px-3">
                    <div className="w-100" id="nav-links">
                        <p className="title-color">Hi, my name is</p>
                        <Zoom><h1>Rony Barua.</h1></Zoom>
                        <h6><span>Jr. Full Stack Developer</span></h6>
                       {/* <div className="who-am-i">
                            <Typed className="d-flex" strings={['<h1><span>Jr. Web Developer</span></h1>','<h1><span>I build Web apps</span></h1>']}
                            typeSpeed={50}
                            backSpeed={50}
                            loop />
                       </div> */}
                    <p className="bio-title">I have strong knowledge of front-end libraries and familiar with backend frameworks, using modern technologies I can develop dynamic websites for your company and I am 100% confident about my skills.</p>
                    <div className=""><a className="link" href="https://drive.google.com/uc?export=download&id=1UKfLI2xeaz16Y0RzQrYV-3rcGXdhhTB0">Download Resume</a></div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default HeaderContent;