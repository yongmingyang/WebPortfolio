import React, { Component } from 'react';

export default class ProjectDetailPage extends Component{
    render(){

        const { 
            header, id, blackTitle,
            orangeTitle, image1, image2, image3, shortDescription,
            date, skills
        } = this.props


        return (
            <div className="portfolio-single modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="portfolioModalScrollable" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content bg-white">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="portfolioModalScrollable">My Work</h5> */}
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
                                                {/* <h2 className="text-dark mb-3">Single <span className="base-color"> Portfolio</span></h2> */}
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
                                        <div className="mt-5">
                                            <div className="portfolio-single-item">
                                                <img src={image1} className="d-block w-100 rounded" alt="..."/>
                                            </div>
                                            {/* <div className="portfolio-single-item">
                                                <img src={image2} className="d-block w-100 rounded" alt="..."/>
                                            </div> */}
                                        </div>
                                        {/* <div className="mt-5 col-lg-3">
                                            <div className="portfolio-single-item">
                                                <img src={image2} className="d-block w-100 rounded" alt="..."/>
                                            </div>
                                        </div> */}
                                        <div className="text-md-left mt-5">
                                            <p className="my-3 text-muted">These words are here to provide the reader with a basic impression of how actual text will appear in its final presentation. This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. These words are here to provide the reader with a basic impression of how actual text will appear in its final presentation. Only for show.</p>
                                            <p className="mt-3 mb-0 text-muted">These words are here to provide the reader with a basic impression of how actual text will appear in its final presentation. This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. These words are here to provide the reader with a basic impression of how actual text will appear in its final presentation. Only for show.</p>
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