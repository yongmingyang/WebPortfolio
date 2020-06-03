import React, { Component } from 'react';

export default class PortfolioItem extends Component{
    render(){

        const { id, title, image, tag } = this.props;
        return(
            <>
                <div className={`col-lg-6 portfolio-item my-3 ${tag}`}>
                    <div className="portfolio-item-content rounded">
                        <img src={image} alt="/"/>
                        <div className="img-overlay text-center">
                            <div className="img-overlay-content">
                                <div className="portfolio-icon">
                                    <button type="button" data-toggle="modal" data-target={`#${id}`}>
                                        <i className="lni-link"></i>
                                    </button>
                                    <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                        <i className="lni-search"></i>
                                    </a>
                                </div>
                                <h4 className="text-secondary mt-3 mb-0"><b>{title}</b></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}