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
                                        {/* <p className="text-muted">Available for freelance projects.</p> */}
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
                                            description: "Graduated with 4 H2 'A's for GCE 'A' Levels. \n Took on multiple leadership roles such as International Director of International Service Learning Expedition Team, Vice-Chairperson of class."
                                        },
                                        {
                                            title: "School of Science and Technology, Singapore",
                                            duration: "2011 - 2014",
                                            description: "Graduated with a score of 5 for 'O' Levels. \n Took on leadership roles such as House Captain, Fencing Captain \n and Peer Support Board Leader"
                                        }
                                    ]}
                                />
                                <Timeline 
                                    icon="lni-pencil base-color"
                                    title="Experience"
                                    content={[
                                        {
                                            title: "Software Engineer Intern, Infocomm Media Development Authority (IMDA)",
                                            duration: "05/2021 - current",
                                            description: `Worked on Artificial Intelligience Product Shopfloor project. Mainly focusing
                                            on CI/CD, provisioning and deploying of resources using Amazon cloud services such as S3 bucket, Cloudfront and
                                            Route 53.`
                                        },
                                        {
                                            title: "Software Engineer Intern, Infocomm Media Development Authority (IMDA)",
                                            duration: "06/2020 - 08/2020",
                                            description: `Worked on developing a Mobile Device Solution (MDM) solution
                                            to support the rollout of mobile devices under the Senior Go Digital. Focused on backend
                                            use of Firebase and cloud functions and created an application to push notifications`
                                        },
                                        {
                                            title: "Photographer Intern, Multifolds Pte Ltd",
                                            duration: "02/2019 - 06/2019",
                                            description: `Interned at Multifolds Private Ltd as a photographer. Had the opportunity to edit photos,
                                            take part in pre-wedding and actual day events. Took the initiative to create a customized automated-email-reply system.`
                                        },
                                        {
                                            title: "Platoon Commander, Singapore Armed Forces",
                                            duration: "2018",
                                            description: `Served as a Platoon Commander in the Singapore Armed Forces during the second year of National Service, was
                                            in-charge of a platoon size of 30.`
                                        }
                                    ]}
                                />
                            </div>
                            <div className="row pt-6">
                                <SkillList
                                    title="Tech Stacks"
                                    content={[
                                        {
                                            name: "JavaScript"
                                        },
                                        {
                                            name: "Java"
                                        },
                                        {
                                            name: "Firebase"
                                        },
                                        {
                                            name: "React"
                                        },
                                        {
                                            name: "React Native"
                                        }
                                    ]}
                                />
                                <SkillList
                                    title="Creative and Others"
                                    content={[
                                        {
                                            name: "Lightroom"
                                        },
                                        {
                                            name: "Photoshop"
                                        },
                                        {
                                            name: "Premiere Pro"
                                        },
                                        {
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