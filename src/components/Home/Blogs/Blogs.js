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
                            date="Posted on 20th February 2021"
                            iconStyle={{ background: 'rgb(254, 15, 93)', color: '#fff' }}
                            icon=""
                        >
                            <h3 className="vertical-timeline-element-title">5 ES6 Features that every JS Developer should know</h3>
                            <small className="vertical-timeline-element-subtitle">- Rony Barua</small>
                            <p>
                                ES5 came in 2009 and gave JS developers a wider scope to do more on JS, but there are some limitations in ES5. To reduce those limitations, JavaScript launched ES6 in 2015 with some extraordinary features and from that 5 features every JS developer should know and these are following
                            </p>
                            <div className="text-right mt-4" id="nav-links"><a href="https://ronyjsdev21.medium.com/5-es6-features-that-every-js-developer-should-know-bd15e02a2ee7">See full article</a></div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(17, 34, 64)', color: '#fff' }}
                            date="Posted On 5th May 2021"
                            iconStyle={{ background: 'rgb(17, 34, 64)', color: '#fff' }}
                            icon=""
                        >
                            <h3 className="vertical-timeline-element-title">Reveal the Modern JavaScript with The Powerful JS Array Methods</h3>
                            <small className="vertical-timeline-element-subtitle">- Rony Barua</small>
                            <p>
                            JavaScript is nowadays the most popular programming language all over the world. But if we look back to a couple of years, JavaScript was only used for Dom manipulation, but now the current world has been taking modern JavaScript as a weapon for developing an incredible number of higher-profile applications. 
                            </p>
                            <div className="text-right mt-4" id="nav-links"><a href="https://ronyjsdev21.medium.com/reveal-the-modern-javascript-with-the-powerful-js-array-methods-deb9a6a0c9ea">See full article</a></div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(254, 15, 93)', color: '#fff' }}
                            date="Posted On 8th May 2021"
                            iconStyle={{ background: 'rgb(17, 34, 64)', color: '#fff' }}
                            icon=""
                        >
                            <h3 className="vertical-timeline-element-title">Discover Modern JavaScript in a different way</h3>
                            <small className="vertical-timeline-element-subtitle">- Rony Barua</small>
                            <p>
                            Modern JavaScript is a powerful programming language all over the world. To develop a scalable high-profile web application most of the developers prefer to use the language. JavaScript has released the ECMAScript 6 version with powerful features which makes Modern JavaScript popular. Today I will share some powerful features with the functionalities of them.
                            </p>
                            <div className="text-right mt-4" id="nav-links"><a href="https://ronyjsdev21.medium.com/discover-modern-javascript-in-a-different-way-67c8911cb5fe">See full article</a></div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(17, 34, 64)', color: '#fff' }}
                            date="Posted On 7th May 2021"
                            iconStyle={{ background: 'rgb(17, 34, 64)', color: '#fff' }}
                            icon=""
                        >
                            <h3 className="vertical-timeline-element-title">How React JS react Behind The Shot</h3>
                            <small className="vertical-timeline-element-subtitle">- Rony Barua</small>
                            <p>
                            React is a simple JavaScript library made by pure vanilla JavaScript and developed by Facebook in 2013. The main purpose of the library is to make interactive user interfaces. React JS is normally used to make a single-page web application. If we compare the library with other libraries or frameworks 
                            </p>
                            <div className="text-right mt-4" id="nav-links"><a href="https://ronyjsdev21.medium.com/how-react-js-react-behind-the-shot-e3e1a472285b">See full article</a></div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
};

export default Blogs;