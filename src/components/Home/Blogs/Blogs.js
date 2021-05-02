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
                            <h3 className="vertical-timeline-element-title">5 ES6 Features that every JS Developer should know</h3>
                            <small className="vertical-timeline-element-subtitle">- Rony Barua</small>
                            <p>
                                ES5 came in 2009 and gave JS developers a wider scope to do more on JS, but there are some limitations in ES5. To reduce those limitations, JavaScript launched ES6 in 2015 with some extraordinary features and from that 5 features every JS developer should know and these are following
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
                            <h3 className="vertical-timeline-element-title">5 ES6 Features that every JS Developer should know</h3>
                            <small className="vertical-timeline-element-subtitle">- Rony Barua</small>
                            <p>
                                ES5 came in 2009 and gave JS developers a wider scope to do more on JS, but there are some limitations in ES5. To reduce those limitations, JavaScript launched ES6 in 2015 with some extraordinary features and from that 5 features every JS developer should know and these are following
                            </p>
                            <div className="text-right mt-4" id="nav-links"><a href="https://ronyjsdev21.medium.com/5-es6-features-that-every-js-developer-should-know-bd15e02a2ee7">See full article</a></div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
};

export default Blogs;