import React, { Component } from 'react';

export default class PortfolioPage extends Component {
    render() {
        return(
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
                                    <a href="#" data-filter="*" className="active my-1">All</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-filter=".webdesign" className="my-1">Photography</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-filter=".mobiledesign" className="my-1">Mobile Apps</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-filter=".seo" className="my-1">Travel Videos</a>
                                </li>
                                {/* <li className="list-inline-item">
                                    <a href="#" data-filter=".graphic" className="my-1">Graphic</a>
                                </li> */}
                            </ul>
                        </div>
                        <div className="portfolio-items mt-4 row">
                            {/* <!-- Item 01 --> */}
                            <div className="col-lg-4 portfolio-item my-3 seo">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item 02 --> */}
                            <div className="col-lg-4 portfolio-item my-3 graphic">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item 03 --> */}
                            <div className="col-lg-4 portfolio-item my-3 webdesign graphic">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item 04 --> */}
                            <div className="col-lg-4 portfolio-item my-3 webdesign">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item 05 --> */}
                            <div className="col-lg-4 portfolio-item my-3 mobiledesign seo">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item 06 --> */}
                            <div className="col-lg-4 portfolio-item my-3 webdesign seo">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item 07 --> */}
                            <div className="col-lg-4 portfolio-item my-3 mobiledesign">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item 08 --> */}
                            <div className="col-lg-4 portfolio-item my-3 mobiledesign webdesign">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item 09 --> */}
                            <div className="col-lg-4 portfolio-item my-3 mobiledesign webdesign">
                                <div className="portfolio-item-content rounded">
                                    <img src="http://placehold.it/600x450" alt="/"/>
                                    <div className="img-overlay text-center">
                                        <div className="img-overlay-content">
                                            <div className="portfolio-icon">
                                                <button type="button" data-toggle="modal" data-target="#portfolio-single">
                                                    <i className="lni-link"></i>
                                                </button>
                                                <a href="http://placehold.it/600x450" className="js-zoom-gallery">
                                                    <i className="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 className="text-white mt-3 mb-0">My Work</h5>
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