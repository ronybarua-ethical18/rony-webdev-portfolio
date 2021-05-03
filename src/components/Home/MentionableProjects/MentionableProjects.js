import React from 'react';
import nation from '../../../images/nation.png';
import City from '../../../images/city.png';
import Users from '../../../images/users.png';
import Food from '../../../images/food-monster.png';
import Favison from '../../../images/favison.png';
import cruise from '../../../images/cruise.png';
import MentionableProject from '../MentionableProject/MentionableProject';
const MentionableProjects = () => {
    const projectsData = [
        {
            projectID: 1,
            projectName: 'City ride Sharing React App',
            projectDesc: 'In this app there are four types of vehicles people can choose to go to their destination such as bus, car, train, and bike people also select their destination using this app, and can book a vehicle.',
            projectImg: City,
            tech1: 'Bootstrap',
            tech2: 'React JS',
            tech3: 'React Router',
            gitHubLink: 'https://github.com/ronybarua-ethical18/city-ride-sharing',
            livesite: 'https://city-ride-sharing-79ae4.web.app/'
        },
        {
            projectID: 2,
            projectName: 'Ultra Nation React App With Rest API',
            projectDesc: 'Ultra nation is a simple react app with firebase  authentication, the app is developed using rest api, where people can see all country flags, name even country details by clicking on the country flag.',
            projectImg: nation,
            tech1: 'Rest API',
            tech2: 'React JS',
            tech3: 'Firebase',
            gitHubLink: 'https://github.com/ronybarua-ethical18/ultra-nation-auth',
            livesite: 'https://ultra-nation-auth.web.app/'
        },
        {
            projectID: 3,
            projectName: 'Demo User Info With Rest API',
            projectDesc: 'The app is developed using third party REST API. Here some of users information i have displayed on the user interface, in the ui you can see various demo users information like name, profession etc',
            projectImg: Users,
            tech1: 'Rest API',
            tech2: 'HTML5',
            tech3: 'CSS3',
            gitHubLink: 'https://github.com/ronybarua-ethical18/user-details-react-app',
            livesite: 'https://user-lists.netlify.app/'
        },
        {
            projectID: 4,
            projectName: 'Favison HTML5 Multipurpose Template',
            projectDesc: 'Its a Bootstrap 4 Multipurpose template, The template can be used as a broadband service company website or electronics products selling website  etc. The Website is mobile  friendly and fully responsive',
            projectImg: Favison,
            tech1: 'HTML5',
            tech2: 'CSS3',
            tech3: 'Bootstrap 4',
            gitHubLink: 'https://github.com/ronybarua-ethical18/favison-multipurpose-html5-template',
            livesite: 'https://ronybarua-ethical18.github.io/favison-multipurpose-html5-template/#contact'
        },
        {
            projectID: 5,
            projectName: 'Hungry Food Monster With Rest Api',
            projectDesc: 'Hungry Food Monster is developed using REST API, the api is all about restaurant food service, where people can checkout their favorite foods such as breakfast, lunch and dinner etc. through this app.  ',
            projectImg: Food,
            tech1: 'HTML5',
            tech2: 'CSS3',
            tech3: 'Reat JS',
            gitHubLink: 'https://github.com/ronybarua-ethical18/hungry-food-monster',
            livesite: 'https://ronybarua-ethical18.github.io/hungry-food-monster/'
        },
        {
            projectID: 6,
            projectName: 'Cruise Queen Booking Cart',
            projectDesc: 'Using the app people can book their tickets and after selecting the number of tickets the user can see the total price and other essential info by clicking on book now button.',
            projectImg: cruise,
            tech1: 'HTML5',
            tech2: 'CSS3',
            tech3: 'JavaScript',
            gitHubLink: 'https://github.com/ronybarua-ethical18/cruise-queen-javascript-project',
            livesite: 'https://ronybarua-ethical18.github.io/cruise-queen-javascript-project/'
        }
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