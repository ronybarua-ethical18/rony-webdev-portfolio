import React from 'react';
import './HeaderContent.css';
const HeaderContent = () => {
    return (
        <div className="main-container mt-5">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 py-5 px-3">
                    <div className="w-100">
                        <p className="title-color">Hi, my name is</p>
                        <h1>Rony Barua.</h1>
                        <h1><span className="">I build web applications</span></h1>
                        <p className="bio-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusantium id similique blanditiis atque et excepturi, soluta nesciunt molestias alias beatae laudantium aliquam commodi dolore dignissimos! Cupiditate numquam similique adipisci nam.</p>
                        <button>Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;