import React, { Component } from 'react';

export default class LandingPage extends Component {
    render() {
        return(
            <section className="section pp-scrollable hero hero-01" id="hero" data-navigation-color="#fff" data-navigation-tooltip="HOME" data-background-image="http://placehold.it/1920x1280">
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                            <div className="title-small">
                                <p className="text-dark">Home</p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h1 className="text-dark mb-3">I'm Ming Yang,</h1>
                                        <h4 className="text-dark text-capitalize mb-0"><span className="base-color">A  </span> <span className="element" data-elements="Mobile App Developer.,Web Developer.,Photographer.,Diver."></span></h4>
                                        {/* <p className="text-dark max-width-450 mx-0 my-4">In a professional context it often happens that private clients corder a publication to be made.</p> */}
                                        <br/>
                                        <div>
                                            <ul className="list-inline social-icon mt-2">
                                                <li className="list-inline-item"><a href="https://www.instagram.com/yongmingyang"><i className="lni-instagram-filled text-dark"></i></a></li>
                                                <li className="list-inline-item"><a href="https://github.com/yongmingyang"><i className="lni-github-original text-dark"></i></a></li>
                                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/yong-ming-yang-158379165/"><i className="lni-linkedin-original text-dark"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}