import React from 'react';
import Training from '../../../images/training.jpg';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
const FeaturedProjectsData = () => {
    const projectsData = [
        {
            projectName: "Painting Wizard",
            projectDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet minus obcaecati! Eius pariatur provident, molestias ipsa quis, iure velit esse eum repellendus soluta deleniti.",
            projecImg: {Training},
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            liveSite: 'https://painting-wizard-fullstack.web.app/'
        },
        {
            projectName: "Painting Wizard",
            projectDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet minus obcaecati! Eius pariatur provident, molestias ipsa quis, iure velit esse eum repellendus soluta deleniti.",
            projecImg: {Training},
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            liveSite: 'https://painting-wizard-fullstack.web.app/'
        },
        {
            projectName: "Painting Wizard",
            projectDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet minus obcaecati! Eius pariatur provident, molestias ipsa quis, iure velit esse eum repellendus soluta deleniti.",
            projecImg: {Training},
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            liveSite: 'https://painting-wizard-fullstack.web.app/'
        }
    ]
    return (
        <div>
            {
                projectsData.map(project => <FeaturedProjects project={project}></FeaturedProjects>)
            }
        </div>
    );
};

export default FeaturedProjectsData;