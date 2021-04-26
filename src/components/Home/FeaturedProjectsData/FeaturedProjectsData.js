import React from 'react';
import Training from '../../../images/training.jpg'
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
const FeaturedProjectsData = () => {
    const projectsData = [
        {
            projectId: 1,
            projectName: "Painting Wizard",
            projectDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet minus obcaecati! Eius pariatur provident, molestias ipsa quis, iure velit esse eum repellendus soluta deleniti.",
            projectImg: { Training },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            liveSite: 'https://painting-wizard-fullstack.web.app/'
        },
        {
            projectId: 2,
            projectName: "The Book Train",
            projectDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet minus obcaecati! Eius pariatur provident, molestias ipsa quis, iure velit esse eum repellendus soluta deleniti.",
            projectImg: { Training },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            liveSite: 'https://painting-wizard-fullstack.web.app/'
        },
        {
            projectId: 3,
            projectName: "Painting Wizard",
            projectDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet minus obcaecati! Eius pariatur provident, molestias ipsa quis, iure velit esse eum repellendus soluta deleniti.",
            projectImg: { Training },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            liveSite: 'https://painting-wizard-fullstack.web.app/'
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