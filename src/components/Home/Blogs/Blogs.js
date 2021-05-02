import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Blogs = () => {
    return (
        <div className="common-margin">
            <div className="row no-gutters">
                <div className="col-md-10 offset-md-1">
                <div className="mb-5 text-center">
                    <span className="title-color">Check out my article.</span>
                    <h3 className="">My Recent Blogs</h3>
                </div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(254, 15, 93)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="Posted on 15th March 2021"
                            iconStyle={{ background: 'rgb(254, 15, 93)', color: '#fff' }}
                            icon=""
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                            <div className="text-right mt-4" id="nav-links"><a href="">See full article</a></div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(17, 34, 64)', color: '#fff' }}
                            date="Posted On 12th March 2021"
                            iconStyle={{ background: 'rgb(17, 34, 64)', color: '#fff' }}
                            icon=""
                        >
                            <h3 className="vertical-timeline-element-title">Art Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                            </p>
                            <div className="text-right mt-4" id="nav-links"><a href="">See full article</a></div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
};

export default Blogs;