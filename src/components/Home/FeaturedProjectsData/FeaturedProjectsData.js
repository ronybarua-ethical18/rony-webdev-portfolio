import React from 'react';
import Books from '../../../images/book-train.png'
import Painting from '../../../images/Painting.png'
import Onion from '../../../images/restaurant.png';
import BPL from '../../../images/bpl.png';
import Redux from '../../../images/Redux.png';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
const FeaturedProjectsData = () => {
    const projectsData = [
        {
            projectId: 1,
            projectName: "Painting Wizard",
            projectDesc: "The app is mainly for those people who have a painting service business and who want to provide their service globally can easily use this app. After booking a service client or user can see the working progress of their booked service by login into their account.",
            projectImg: Painting ,
            clientCode: 'https://github.com/ronybarua-ethical18/painting-wizard-client',
            serverCode: 'https://github.com/ronybarua-ethical18/painting-wizard-server',
            liveSite: 'https://painting-wizard-fullstack.web.app/'
        },
        {
            projectId: 2,
            projectName: "The Book Train",
            projectDesc: "Using the software people can search for programming related books, people can see their ordered book list at any time by logging to their account. The app is fully in admin control. Admin can add, delete and update books, also admin can see order details.",
            projectImg: Books,
            clientCode: 'https://github.com/ronybarua-ethical18/the-book-train-client',
            serverCode: 'https://github.com/ronybarua-ethical18/the-book-train-server',
            liveSite: 'https://the-book-train.web.app/'
        },
        {
            projectId: 3,
            projectName: "Red Onion Restaurant Foods",
            projectDesc: "The app provides food delivery service in online, where a consumer can check out their favorite dish from our food categories. After ordering a dish or multiple dishes, a consumer can see their ordered dish delivery progress by login into their account.",
            projectImg: Onion,
            clientCode: 'https://github.com/ronybarua-ethical18/hot-onion-restaurant-client',
            serverCode: 'https://github.com/ronybarua-ethical18/hot-onion-restaurant-server',
            liveSite: 'https://red-onion-restaurant-fullstack.web.app/'
        },
        {
            projectId: 4,
            projectName: "Trusty Furniture React App with Redux",
            projectDesc: "Trusty furniture is a simple ecommerce web application where  people can purchase various kinds of furniture like table,  chair, sofa and so on. The website is fully responsive.  People can easily add product to cart and see their ordered  products with the total price.",
            projectImg: Redux,
            clientCode: 'https://github.com/ronybarua-ethical18/trusty-furniture-team-project/',
            serverCode: 'https://github.com/ronybarua-ethical18/trusty-furniture-team-project/',
            liveSite: 'https://trusty-furniture.web.app/'
        },
        {
            projectId: 5,
            projectName: "BPL Player Selection",
            projectDesc: "The app is a simple demonstration of selecting player for premiere league, according to their auction. The league can be football or cricket, in this app people can add their favorite player to their team where player will be selected only one time that means one player can not be selected for the second time.",
            projectImg: BPL,
            clientCode: 'https://github.com/ronybarua-ethical18/bpl-player-selection',
            serverCode: 'https://github.com/ronybarua-ethical18/bpl-player-selection',
            liveSite: 'https://bpl-players-selection.netlify.app/'
        }
    ]
    return (
        <div className="main-container">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 px-3">
                    <h3 className="heading">Featured Projects</h3>
                    {
                        projectsData.map(project => <FeaturedProjects project={project}></FeaturedProjects>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjectsData;