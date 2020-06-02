import React, { Component } from 'react';

export default class TestimonialPage extends Component {
    render() {
        return(
            <section id="testimonial" className="section pp-scrollable testimonial text-center" data-navigation-color="#fff" data-navigation-tooltip="CLIENT">
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                            <div className="row">
                                <div className="title-small">
                                    <p className="text-dark">Testimonial</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <h2 className="text-dark">My  <span className="base-color">Clients</span></h2>
                                        <p className="text-muted mt-1">What my clients say about me</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="owl-carousel">
                                        {/* <!-- Item 01 --> */}
                                        <div className="testimonial-item text-left">
                                            <p className="mb-2 text-muted">" In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. "</p>
                                            <div className="float-left mt-4 mr-3 mr-sm-4">
                                                <img src="http://placehold.it/125x125" alt="/" className="rounded-circle"/>
                                            </div>
                                            <h4 className="float-left mt-5">-Jone Doe, <span className="font-weight-bold">Seo Manager</span></h4>
                                        </div>
                                        {/* <!-- Item 02 --> */}
                                        <div className="testimonial-item text-left">
                                            <p className="mb-2 text-muted">" In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. "</p>
                                            <div className="float-left mt-4 mr-3 mr-sm-4">
                                                <img src="http://placehold.it/125x125" alt="/" className="rounded-circle"/>
                                            </div>
                                            <h4 className="float-left mt-5">-Jessy Doe, <span className="font-weight-bold">UI Designer</span></h4>
                                        </div>
                                        {/* <!-- Item 03 --> */}
                                        <div className="testimonial-item text-left">
                                            <p className="mb-2 text-muted">" In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. "</p>
                                            <div className="float-left mt-4 mr-3 mr-sm-4">
                                                <img src="http://placehold.it/125x125" alt="/" className="rounded-circle"/>
                                            </div>
                                            <h4 className="float-left mt-5">-Jully Doe, <span className="font-weight-bold">UX Designer</span></h4>
                                        </div>
                                        {/* <!-- Item 04 --> */}
                                        <div className="testimonial-item text-left">
                                            <p className="mb-2 text-muted">" In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. "</p>
                                            <div className="float-left mt-4 mr-3 mr-sm-4">
                                                <img src="http://placehold.it/125x125" alt="/" className="rounded-circle"/>
                                            </div>
                                            <h4 className="float-left mt-5">-Jully Doe, <span className="font-weight-bold">UX Designer</span></h4>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}