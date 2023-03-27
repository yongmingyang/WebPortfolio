import React, { Component } from 'react';
import Timeline from '../components/Timeline';
import SkillList from '../components/SkillList';

export default class ResumePage extends Component {
    render() {
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
                                            description: "Currently on my third year of a 4 year undergraduate program studying Computer Science"
                                        },
                                        {
                                            title: "Exchange student, University of Toronto",
                                            duration: "2022 - 2023",
                                            description: "Enrolled in the University of Toronto for an exchange program as part of the NUS Overseas College program."
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
                                            title: "Software Engineer, Mavennet Inc.",
                                            duration: "01/2022 - 12/2022",
                                            description: <span>
                                                Built and demo-ed a Proof of Concept smart contract application in 2 weeks for a client which was used to raise CAD$1.5m in funding.
                                                <br/>
                                                <br/>
                                                Took the lead (both business and tech) in a proposal to build a crypto bridge for the Stellar Foundation.
                                                <br/>
                                                <br/>
                                                Lead blockchain development efforts, managed expectations, and provided consultation for a client in which I built 2 main products:
                                                <br/> 1) a smart contract to split incoming revenue based on varying conditions (Solana)
                                                <br/> 2) a smart contract to enable freelance agreements and payments between DAOs/groups and individuals (Ethereum)
                                                <br/> 
                                                <br/> 
                                                Set up multilingual support for Metaltrail project using i18n on React. Wrote unit-tests for Neoflow, bringing test coverage up from 45% to 80%. Multi Factor Authentication set up for projects Grapes and YaaS.
                                                <br/> 
                                                <br/> 
                                                Ran and maintained validator nodes for Aptos and Cheqd using AWS EC2 instances. Earned over US$4000 through airdrops.
                                            </span>
                                        },
                                        {
                                            title: "Software Engineer Intern, Infocomm Media Development Authority (IMDA)",
                                            duration: "05/2021 - 07/2021",
                                            description: `Involved in Artificial Intelligience Product Shopfloor project, focusing mainly
                                            on CI/CD, provisioning and deploying of resources using Amazon cloud services such as S3 bucket, Cloudfront and
                                            Route 53. Developed and designed the architecture of a preview system including a web application and devOps
                                            for non-technical users to make changes. Saved 5 - 10mins of user's time for each change made. `
                                        },
                                        {
                                            title: "Software Engineer Intern, Infocomm Media Development Authority (IMDA)",
                                            duration: "06/2020 - 08/2020",
                                            description: `Worked on developing a Mobile Device Solution (MDM) solution
                                            to support the rollout of mobile devices under the Senior Go Digital. Focused on backend
                                            use of Firebase and cloud functions and created an application to push notifications. This provided the foundation for the project
                                            to continue developing.`
                                        },
                                        {
                                            title: "Photographer Intern, Multifolds Phtography Global Pte Ltd",
                                            duration: "02/2019 - 06/2019",
                                            description: `Interned at Multifolds Private Ltd as a photographer. Had the opportunity to edit photos,
                                            take part in pre-wedding and actual day events. Took the initiative to develop a customized automated-email-reply system which
                                            saved 3-4 hours of post-event work.`
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
                                            name: "JavaScript/Typescript"
                                        },
                                        {
                                            name: "Solidity"
                                        },
                                        {
                                            name: "Rust (Anchor Framework)"
                                        },
                                        {
                                            name: "AWS (EC2, S3, Lambda, etc)"
                                        },
                                        {
                                            name: "React"
                                        },
                                        {
                                            name: "Java"
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