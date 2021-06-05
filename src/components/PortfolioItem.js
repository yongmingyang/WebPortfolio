import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioItem extends Component{
    render(){

        let nextStep;
        const { id, title, image, tag } = this.props;
        if (tag === "photography") {
            nextStep = (
                <a  data-target={`#${id}`}>
                    <h4 className="text-secondary mt-3 mb-0"><b>{title}</b></h4>
                </a>
            )
        } else if (tag === "codeprojects") {
            console.log("portfolioitem id:" + id);
            nextStep = (
                // <a href={`${id}`}>
                //     <h4 className="text-secondary mt-3 mb-0"><b>{title}</b></h4>
                // </a>
                <Link to="/BYF">
                    <h4 className="text-secondary mt-3 mb-0"><b>{title}</b></h4>
                </Link>
            )
        } else if (tag === "travelVideos"){
            nextStep = (
                <a data-toggle="modal" data-target={`#${id}`}>
                    <h4 className="text-secondary mt-3 mb-0"><b>{title}</b></h4>
                </a>
            )
        }

        console.log(nextStep);
        return(
            <>
                <div className={`col-lg-6 portfolio-item my-3 ${tag}`}>
                    <div className="portfolio-item-content rounded">
                        <img src={image} alt="/"/>
                        <div className="img-overlay text-center">
                            <div className="img-overlay-content">
                                {/* <div className="portfolio-icon">
                                    <button type="button" data-toggle="modal" data-target={`#${id}`}>
                                        <i className="lni-link"></i>
                                    </button>
                                    <a href={image} className="js-zoom-gallery">
                                        <i className="lni-search"></i>
                                    </a>
                                </div> */}
                                <button className="link">
                                    {nextStep}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}