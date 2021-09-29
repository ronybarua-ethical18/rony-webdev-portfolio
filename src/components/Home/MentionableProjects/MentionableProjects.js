import React from 'react';
import nation from '../../../images/nation.png';
import City from '../../../images/city.png';
import Users from '../../../images/users.png';
import Food from '../../../images/food-monster.png';
import Favison from '../../../images/favison.png';
import Soccer from '../../../images/soccer.png';
import cruise from '../../../images/cruise.png';
import BPL from '../../../images/bpl.png';
import Redux from '../../../images/Redux.png';
import Tailwind from '../../../images/tailwind.png';
import MentionableProject from '../MentionableProject/MentionableProject';
const MentionableProjects = () => {
    const projectsData = [
        {
            projectID: 1,
            projectName: 'Image Gallery with REST API and Tailwind CSS',
            projectDesc: 'The app is developed with react rest api and tailwind css where the image data fetched from a third party api and people can search their desired images by using this app.',
            projectImg: Tailwind,
            tech1: 'Tailwind CSS',
            tech2: 'React JS',
            tech3: 'Rest API',
            gitHubLink: 'https://github.com/ronybarua-ethical18/react-app-with-tailwind-css',
            livesite: 'https://react-app-with-tailwind-css.web.app/'
        },
        {
            projectId: 2,
            projectName: "Trusty Furniture React App with Redux",
            projectDesc: "Simple ecommerce app  where people can purchase various kinds of furniture like table,  chair, sofa and so on. People can easily add product to cart and see their ordered  products with the total price.",
            tech1: 'Redux',
            tech2: 'React JS',
            tech3: 'React Router',
            projectImg: Redux,
            gitHubLink: 'https://github.com/ronybarua-ethical18/trusty-furniture-team-project/',
            livesite: 'https://trusty-furniture.web.app/'
        },
        {
            projectId: 3,
            projectName: "BPL Player Selection",
            projectDesc: "The app is a simple demonstration of selecting player for premiere league, according to their auction. In this app people can add their favorite player to their team where player will be selected only one time that means one player can not be selected for the second time.",
            projectImg: BPL,
            tech1: 'React JS',
            tech2: 'React Bootstrap',
            tech3: 'React Router',
            gitHubLink: 'https://github.com/ronybarua-ethical18/bpl-player-selection',
            livesite: 'https://bpl-players-selection.netlify.app/'
        },
        {
            projectID: 4,
            projectName: 'Hungry Food Monster App With Rest Api',
            projectDesc: 'Hungry Food Monster is developed using REST API, the api is all about restaurant food service, where people can checkout their favorite foods such as breakfast, lunch and dinner etc. through this app.  ',
            projectImg: Food,
            tech1: 'HTML5',
            tech2: 'CSS3',
            tech3: 'Reat JS',
            gitHubLink: 'https://github.com/ronybarua-ethical18/hungry-food-monster',
            livesite: 'https://ronybarua-ethical18.github.io/hungry-food-monster/'
        },
        {
            projectId: 5,
            projectName: "Soccer Team Tracker With Rest API",
            projectDesc: "The app provides some international football leagues or teams information where you guys can track individual team info like team logo, team banner, team name and so on. The project is created only for practice purpose.",
            projectImg: Soccer,
            tech1: 'Rest API',
            tech2: 'React Boostrap',
            tech3: 'React JS',
            gitHubLink: 'https://github.com/ronybarua-ethical18/soccer-team-tracker',
            livesite: 'https://soccer-team-tracker.netlify.app/'
        },
        {
            projectID: 6,
            projectName: 'Ultra Nation React App With Rest API',
            projectDesc: 'Ultra nation is a simple react app with firebase  authentication, the app is developed using rest api, where people can see all country flags, name even country details by clicking on the country flag.',
            projectImg: nation,
            tech1: 'Rest API',
            tech2: 'React JS',
            tech3: 'Firebase',
            gitHubLink: 'https://github.com/ronybarua-ethical18/ultra-nation-auth',
            livesite: 'https://ultra-nation-auth.web.app/'
        },
        // {
        //     projectID: 7,
        //     projectName: 'Favison HTML5 Multipurpose Template',
        //     projectDesc: 'Its a Bootstrap 4 Multipurpose template, The template can be used as a broadband service company website or electronics products selling website  etc. The Website is mobile  friendly and fully responsive',
        //     projectImg: Favison,
        //     tech1: 'HTML5',
        //     tech2: 'CSS3',
        //     tech3: 'Bootstrap 4',
        //     gitHubLink: 'https://github.com/ronybarua-ethical18/favison-multipurpose-html5-template',
        //     livesite: 'https://ronybarua-ethical18.github.io/favison-multipurpose-html5-template/#contact'
        // },
        // {
        //     projectID: 8,
        //     projectName: 'City ride Sharing React App',
        //     projectDesc: 'In this app there are four types of vehicles people can choose to go to their destination such as bus, car, train, and bike people also select their destination using this app, and can book a vehicle.',
        //     projectImg: City,
        //     tech1: 'Bootstrap',
        //     tech2: 'React JS',
        //     tech3: 'React Router',
        //     gitHubLink: 'https://github.com/ronybarua-ethical18/city-ride-sharing',
        //     livesite: 'https://city-ride-sharing-79ae4.web.app/'
        // },
        // {
        //     projectID: 9,
        //     projectName: 'Cruise Queen Booking Cart',
        //     projectDesc: 'Using the app people can book their tickets and after selecting the number of tickets the user can see the total price and other essential info by clicking on book now button.',
        //     projectImg: cruise,
        //     tech1: 'HTML5',
        //     tech2: 'CSS3',
        //     tech3: 'JavaScript',
        //     gitHubLink: 'https://github.com/ronybarua-ethical18/cruise-queen-javascript-project',
        //     livesite: 'https://ronybarua-ethical18.github.io/cruise-queen-javascript-project/'
        // },
        // {
        //     projectID: 10,
        //     projectName: 'Demo User Info With Rest API',
        //     projectDesc: 'The app is developed using third party REST API. Here some of users information i have displayed on the user interface, in the ui you can see various demo users information like name, profession etc',
        //     projectImg: Users,
        //     tech1: 'Rest API',
        //     tech2: 'HTML5',
        //     tech3: 'CSS3',
        //     gitHubLink: 'https://github.com/ronybarua-ethical18/user-details-react-app',
        //     livesite: 'https://user-lists.netlify.app/'
        // }
    ]
    return (
        <div className="main-container">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 px-3">
                    <h3 className="heading">Other Projects</h3>
                    <div className="row">
                        {
                            projectsData.map(project => <MentionableProject project={project}></MentionableProject>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentionableProjects;