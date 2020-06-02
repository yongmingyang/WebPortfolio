import React, { Component } from 'react';
import Timeline from '../components/Timeline';
import SkillList from '../components/SkillList';

export default class ResumePage extends Component {
    render() {
        // const { title } = this.props.title;
        // console.log("hei")
        // console.log(title);
        return(
            <section id="resume" className="section pp-scrollable resume" data-navigation-color="#fff" data-navigation-tooltip="RESUME">
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                            <div className="row">
                                <div className="title-small">
                                   <p className="text-dark">Resume</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <h2 className="text-dark mb-3"><span className="base-color">Resume</span></h2>
                                        <p className="text-muted">Available for freelance projects.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <Timeline 
                                    icon="lni-graduation base-color"
                                    title="Education"
                                    content={[
                                        {
                                            title: "Bachelor of Computing, National University of Singapore",
                                            duration: "2019 - current",
                                            description: "Currently on my second year of a 4 year undergraduate program studying Computer Science"
                                        },
                                        {
                                            title: "Officer Cadet School, Singapore Armed Forces",
                                            duration: "2017",
                                            description: "Trained in the Officer Cadet School for a period of 9 months."
                                        },
                                        {
                                            title: "Nanyang Junior College",
                                            duration: "2015 - 2016",
                                            description: "Graduated with a rank point of 87.5/90 for 'A' Levels. \n Took on multiple leadership roles such as International Director of International Service Learning Expedition Team, Vice-Chairperson of class."
                                        },
                                        {
                                            title: "School of Science and Technology, Singapore",
                                            duration: "2011 - 2014",
                                            description: "Graduated with a score of 5 for 'O' Levels. \n Took on leadership roles such as House, Fencing Captain \n and Peer Support Board Leader"
                                        }
                                    ]}
                                />
                                <Timeline 
                                    icon="lni-pencil base-color"
                                    title="Experience"
                                    content={[
                                        {
                                            title: "Photographer Intern, Multifolds Pte Ltd",
                                            duration: "2019",
                                            description: "Interned at Multifolds Private Ltd as a photographer. Had the opportunity to edit photos, take part in pre-wedding and actual day events. Took the chance to help create a customized automated-email-reply system."
                                        },
                                        {
                                            title: "Platoon Commander, Singapore Armed Forces",
                                            duration: "2018",
                                            description: "Served as a Platoon Commander in the Singapore Armed Forces during the second year of National Service. In-charge of a platoon size of 30."
                                        },
                                        {
                                            title: ">Waiter, Woody Family Cafe",
                                            duration: "2015",
                                            description: "Worked at Woody Family Cafe for a short period before Junior College."
                                        }
                                    ]}
                                />
                            </div>
                            <div className="row pt-6">
                                <SkillList
                                    title="Tech Stacks"
                                    content={[
                                        {
                                            proficiency: '80%',
                                            name: "JavaScript"
                                        },
                                        {
                                            proficiency: '80%',
                                            name: "Java"
                                        },
                                        {
                                            proficiency: '80%',
                                            name: "HTML"
                                        },
                                        {
                                            proficiency: '60%',
                                            name: "CSS"
                                        },
                                        {
                                            proficiency: '50%',
                                            name: "React Native"
                                        }
                                    ]}
                                />
                                <SkillList
                                    title="Creative and Others"
                                    content={[
                                        {
                                            proficiency: '80%',
                                            name: "Lightroom"
                                        },
                                        {
                                            proficiency: '60%',
                                            name: "Photoshop"
                                        },
                                        {
                                            proficiency: '50%',
                                            name: "Premiere Pro"
                                        },
                                        {
                                            proficiency: '80%',
                                            name: "Advanced Open Water Diver"
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}