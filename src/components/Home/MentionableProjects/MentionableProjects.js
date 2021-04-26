import { findByDisplayValue } from '@testing-library/dom';
import React from 'react';
import sample from '../../../images/training.jpg';
import MentionableProject from '../MentionableProject/MentionableProject';
const MentionableProjects = () => {
    const projectsData = [
        {
            projectName: 'Soccer Team Tracker',
            projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id eaque atque voluptatem obcaecati nam aspernatur sapiente veniam aliquid quae.',
            projectImg: { sample },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            livesite: 'https://soccer-team-tracker.netlify.app/'
        },
        {
            projectName: 'Soccer Team Tracker',
            projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id eaque atque voluptatem obcaecati nam aspernatur sapiente veniam aliquid quae.',
            projectImg: { sample },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            livesite: 'https://soccer-team-tracker.netlify.app/'
        },
        {
            projectName: 'Soccer Team Tracker',
            projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id eaque atque voluptatem obcaecati nam aspernatur sapiente veniam aliquid quae.',
            projectImg: { sample },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            livesite: 'https://soccer-team-tracker.netlify.app/'
        },
        {
            projectName: 'Soccer Team Tracker',
            projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id eaque atque voluptatem obcaecati nam aspernatur sapiente veniam aliquid quae.',
            projectImg: { sample },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            livesite: 'https://soccer-team-tracker.netlify.app/'
        },
        {
            projectName: 'Soccer Team Tracker',
            projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id eaque atque voluptatem obcaecati nam aspernatur sapiente veniam aliquid quae.',
            projectImg: { sample },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            livesite: 'https://soccer-team-tracker.netlify.app/'
        },
        {
            projectName: 'Soccer Team Tracker',
            projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id eaque atque voluptatem obcaecati nam aspernatur sapiente veniam aliquid quae.',
            projectImg: { sample },
            gitHubLink: 'https://github.com/ronybarua-ethical18',
            livesite: 'https://soccer-team-tracker.netlify.app/'
        }
    ]
    return (
        <div className="main-container">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1 px-3">
                    <h3 className="heading">Other Mentionable Projects</h3>
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