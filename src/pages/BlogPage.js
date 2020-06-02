import React, { Component } from 'react';

export default class BlogPage extends Component{
    render(){
        return(
            <section id="blog" className="section pp-scrollable blog" data-navigation-color="#fff" data-navigation-tooltip="BLOG">
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                        <div className="row">
                            <div className="title-small">
                                <p className="text-dark">Blog</p>
                            </div>
                            <div className="col-lg-12">
                                <div className="text-left">
                                    <h2 className="text-dark">Latest <span className="base-color">News</span></h2>
                                    <p className="text-muted mt-1">Check Out My Latest Blog Posts</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            {/* <!-- Item-01 --> */}
                            <div className="col-lg-4">
                                <div className="blog-item">
                                    <div className="image-blog">
                                        <img src="http://placehold.it/600x400" alt="/" className="img-fluid rounded-top"/>
                                    </div>
                                    <div className="blog-content rounded-bottom text-left p-3">
                                        <h5 className="mb-0 mt-3"><a href="javascript:void(0)" data-toggle="modal" data-target="#blog-single" className="text-dark font-weight-light">Be Your Best Version</a></h5>
                                        <ul className="list-inline mt-3">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="base-color font-weight-bold">by</i>
                                                    <span className="text-dark font-italic">John Doe</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                        <div className="blog-link pb-3">
                                            <button type="button" className="base-color" data-toggle="modal" data-target="#blog-single">Read More...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item-02 --> */}
                            <div className="col-lg-4">
                                <div className="blog-item">
                                    <div className="image-blog">
                                        <img src="http://placehold.it/600x400" alt="/" className="img-fluid rounded-top"/>
                                    </div>
                                    <div className="blog-content rounded-bottom text-left p-3">
                                        <h5 className="mb-0 mt-3"><a href="javascript:void(0)" data-toggle="modal" data-target="#blog-single" className="text-dark font-weight-light">5 Tips In UI/UX Web Design</a></h5>
                                        <ul className="list-inline mt-3">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="base-color font-weight-bold">by</i>
                                                    <span className="text-dark font-italic">John Doe</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                        <div className="blog-link pb-3">
                                            <button type="button" className="base-color" data-toggle="modal" data-target="#blog-single">Read More...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item-03 --> */}
                            <div className="col-lg-4">
                                <div className="blog-item">
                                    <div className="image-blog">
                                        <img src="http://placehold.it/600x400" alt="/" className="img-fluid rounded-top" />
                                    </div>
                                    <div className="blog-content rounded-bottom text-left p-3">
                                        <h5 className="mb-0 mt-3"><a href="javascript:void(0)" data-toggle="modal" data-target="#blog-single" className="text-dark font-weight-light">Write Your Dreams</a></h5>
                                        <ul className="list-inline mt-3">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="base-color font-weight-bold">by</i>
                                                    <span className="text-dark font-italic">John Doe</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                        <div className="blog-link pb-3">
                                            <button type="button" className="base-color" data-toggle="modal" data-target="#blog-single">Read More...</button>
                                        </div>
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