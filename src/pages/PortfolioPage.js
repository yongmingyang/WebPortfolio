import React, { Component } from 'react';
import About from './AboutPage';
import ImageDetailPage from './ImageDetailPage';
import Tab from '../components/Tab';
import set1_1 from '../images/SEOULXJEJU/set1_1.jpg';
import set1_2 from '../images/SEOULXJEJU/set1_2.jpg';
import set1_3 from '../images/SEOULXJEJU/set1_3.jpg';
import sardinerun from '../images/PHILIPPINES/sardinerun.jpg';
import Israel9 from '../images/ISRAEL/Israel9.jpg';
import Thailand from '../images/BYF/Thailand.jpg';
import canvasCover from '../images/CANVASII/canvasCover.jpg';
import images from "../images/BYF/images";

export default class PortfolioPage extends Component {
    render() {
        console.log(images);
        return(
            <>
                <section id="portfolio" className="section pp-scrollable portfolio" data-navigation-color="#fff" data-navigation-tooltip="PORTFOLIO">
                    <div className="display-table">
                        <div className="display-content">
                            <div className="container">
                                <div className="row">
                                    <div className="title-small">
                                        <p className="text-dark">Portfolio</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="text-left">
                                            <h2 className="text-dark">All <span className="base-color">Projects</span></h2>
                                            <p className="text-muted mx-auto section-subtitle mt-3">A mix of technology and creativity</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    {/* <!--   Portfolio Filters   --> */}
                                    <ul id="portfolio-filter" className="list-unstyled list-inline mb-0 col-lg-12 text-left portfolio-filter">
                                        <li className="list-inline-item">
                                            <a href="#" data-filter=".photography" className="active my-1">Photography</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" data-filter=".codeprojects" className="my-1">Code Projects</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" data-filter=".seo" className="my-1">Travel Videos</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="portfolio-items mt-1 row">
                                    <Tab
                                        tag="photography"
                                        content={[
                                            {
                                                id: "portfolio-single3",
                                                title: "MOALBOAL / PHILIPPINES",
                                                image: {sardinerun} 
                                            },
                                            {
                                                id: "portfolio-single2",
                                                title: "SEOUL / JEJU",
                                                image: {set1_1}
                                            },
                                            {
                                                id: "portfolio-single",
                                                title: "ISRAEL",
                                                image: {Israel9}
                                            },
                                            {
                                                id: "portfolio-single4",
                                                title: "THAILAND",
                                                image: {Thailand}
                                            },
                                            {
                                                id: "portfolio-single5",
                                                title: "CANVAS PERFORMANCE",
                                                image: {canvasCover}
                                            }
                                        ]}
                                    />
                                    <Tab
                                        tag="codeprojects"
                                        content={[
                                            {
                                                id: "./projectPages/ThailandPage",
                                                title: "MOALBOAL / PHILIPPINES",
                                                image: {sardinerun} 
                                            },
                                            {
                                                id: "portfolio-single6",
                                                title: "THAILAND",
                                                image: {Thailand}
                                            },
                                            {
                                                id: "portfolio-single0",
                                                title: "CANVAS PERFORMANCE",
                                                image: {canvasCover}
                                            }

                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ImageDetailPage
                    image={[set1_1, set1_2, set1_3]}
                    header="Seoul/Jeju"
                    id="portfolio-single2"
                    blackTitle="SEOUL / "
                    orangeTitle="JEJU"
                    shortDescription="Shots from a trip to Seoul and Jeju"
                    skills="Photography / Lightroom"
                    date="December 2019"
                />
                {/* <ProjectDetailPage
                    image1={sardinerun}
                    header="Moalboal/Philippines"
                    id="portfolio-single3"
                    blackTitle="MOALBOAL / "
                    orangeTitle="PHILIPPINES"
                    shortDescription="Shots from a trip to Phillipines"
                    skills="Photography / Lightroom"
                    date="January 2020"
                />
                <ProjectDetailPage
                    image1={Israel9}
                    header="Israel"
                    id="portfolio-single"
                    blackTitle="ISR"
                    orangeTitle="AEL"
                    shortDescription="Shots from a trip to Israel"
                    skills="Photography / Lightroom"
                    date="May 2018"
                />
                <ProjectDetailPage
                    image1={Thailand}
                    header="Thailand"
                    id="portfolio-single4"
                    blackTitle="THAI"
                    orangeTitle="LAND"
                    shortDescription="Shots from a trip to Thailand"
                    skills="Photography / Lightroom"
                    date="July 2019"
                />
                <ProjectDetailPage
                    image1={canvasCover}
                    header="Canvas II"
                    id="portfolio-single5"
                    blackTitle="CANVAS "
                    orangeTitle=" II"
                    shortDescription="Shots from a school performance"
                    skills="Photography / Lightroom"
                    date="May 2016"
                /> */}
            </>
        );
    }
}