import React, { Component } from 'react'

export default class Menu extends Component{
    render(){
        return (
            <div className="overlay-menu bg-blue py-3 px-4 text-center center-item">
                {/* <!-- Overlay Menu --> */}
                <div id="scrollspy" className="overlay-menu-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 overlay-nav">
                                <ul className="list-group text-left" id="myMenu">
                                    <li data-menuanchor="hero" className="list-group-item"><a href="#hero">Home</a></li>
                                    <li data-menuanchor="about" className="list-group-item"><a href="#about">About me</a></li>
                                    {/* <li data-menuanchor="services" className="list-group-item"><a href="#services">Services</a></li> */}
                                    <li data-menuanchor="portfolio" className="list-group-item"><a href="#portfolio">Portfolio</a></li>
                                    {/* <li data-menuanchor="client" className="list-group-item"><a href="#testimonial">Client</a></li>
                                    <li data-menuanchor="blog" className="list-group-item"><a href="#blog">Blog</a></li> */}
                                </ul>
                                <ul className="list-group contact-info text-left mb-0">
                                    <li className="list-group-item"><span>Contact Info :</span></li>
                                    <li className="list-group-item"><span><i className="lni-map-marker"></i> Singapore</span></li>
                                    <li className="list-group-item"><span><i className="lni-envelope"></i> yongmingyang1998@gmail.com</span></li>
                                    <li className="list-group-item"><span>Follow me :</span></li>
                                    <li className="list-group-item">
                                        <ul className="list-inline socails">
                                            <li className="list-inline-item"><a href="https://www.instagram.com/yongmingyang"><i className="lni-instagram-filled text-dark"></i></a></li>
                                            <li className="list-inline-item"><a href="https://github.com/yongmingyang"><i className="lni-github-original text-dark"></i></a></li>
                                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/yong-ming-yang-158379165/"><i className="lni-linkedin-original text-dark"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}