import React, { Component } from 'react';
import Footer from '../components/Footer';

export default class BlogPage extends Component{
    render(){
        return(
            <section id="contact" className="section pp-scrollable contact" data-navigation-color="#fff" data-navigation-tooltip="CONTACT">
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                        <div className="row">
                            <div className="title-small">
                                <p className="text-dark">Get in Touch</p>
                            </div>
                            <div className="col-lg-12">
                                <div className="text-left">
                                    <h2 className="text-dark">Get <span className="base-color">In Touch</span></h2>
                                    {/* <p className="text-muted mx-auto section-subtitle mt-3">Feel Free To Contact Me Any Time</p> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="row mt-5">
                            <div className="col-lg-12">
                                <div id="my-map" data-location-lat="43.053454"  data-location-lng="-76.144508" data-location-icon="http://placehold.it/60x30"></div>
                            </div>
                        </div> */}
                        <div className="row mt-5">
                            <div className="col-lg-6 text-left">
                                <div className="contact-form">
                                    <h6 className="font-weight-semibold">Contact me at: </h6>
                                    {/* <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> */}
                                    <div className="mt-4">
                                        {/* <p className="mt-2 font-weight-bold"> Address : <span className="text-muted"> Singapore</span></p> */}
                                        {/* <p className="mt-2 font-weight-bold"> Phone : <span className="text-muted"> +1 212-695-1962</span></p> */}
                                        <p className="mt-2 font-weight-bold"> Mail : <span className="text-muted">yong.mingyang@u.nus.edu</span></p>
                                        {/* <p className="mt-2 font-weight-bold"> Web : <span className="text-muted">www.yongmingyang.com </span></p> */}
                                    </div>
                                </div>
                            </div>
                                    
                            {/* <div className="col-lg-6 text-left"> */}
                                {/* <h6 className="font-weight-semibold">How can I help you ? </h6>
                                <form id="contactForm" className="form mt-3">
                                    <div className="row">
                                        <div className="col-lg-12 form-item">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" className="form-control" data-name-error="Name is required" placeholder="Your Name*" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 form-item">
                                            <div className="form-group">
                                                <input name="email" id="email" type="email" className="form-control" data-email-error="Email is required" data-email-valid="Email is not valid" placeholder="Your Email*" required />
                                            </div>
                                        </div>
                                        <div className="col-12 form-item">
                                            <div className="form-group">
                                                <textarea name="comments" id="comments" rows="2" className="form-control h-auto" data-comment-error="Comments is required" placeholder="Your message..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 mt-1 text-left">
                                            <button type="button" className="pill-button" id="submit-btn" onclick="sendEmail()">Send Message</button>
                                            <div id="message" className="toast text-white shadow-none border-0" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000" >
                                                <div className="toast-body d-inline-block"></div>
                                                    <button type="button" className="pr-3 close" data-dismiss="toast" aria-label="Close">
                                                        <span aria-hidden="true" className="lni-close size-xs text-white"></span>
                                                    </button>
                                                </div>
                                             </div>
                                        </div>
                                    </form> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
              </section>
        );
    }
}