import React, { Component } from 'react';
// import Slider from '../components/SliderComponent/components/Slider';

export default class ImageDetailPage extends Component{
    render(){

        const { 
            header,
            id,
            blackTitle,
            orangeTitle,
            image, 
            shortDescription,
            date, 
            skills
        } = this.props
        
        console.log(typeof image)

        return (
            <div className="portfolio-single modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="portfolioModalScrollable" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content bg-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="portfolioModalScrollable">{header}</h5>
                            <button type="button" className="close text-muted" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="pt-4 pb-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-10 offset-md-1">
                                            <div className="text-center">
                                                <h2 className="text-dark mb-3">{blackTitle}<span className="base-color">{orangeTitle}</span></h2>
                                                <p className="text-muted max-width-450">{shortDescription}</p>
                                            </div>
                                            <div className="row contact-info mt-5">
                                                <div className="col-md-4">
                                                    <div className="text-center">
                                                        <div>
                                                            <h6>Created by:</h6>
                                                            <p className="text-muted mb-0">Yong Ming Yang</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 p-title-border mt-3 mt-md-0">
                                                    <div className="text-center">
                                                        <div>
                                                            <h6 className="contact_detail-title">Date:</h6>
                                                            <p className="text-muted mb-0">{date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mt-3 mt-md-0">
                                                    <div className="text-center">
                                                        <div>
                                                            <h6>Skills:</h6>
                                                            <p className="text-muted mb-0">{skills}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}