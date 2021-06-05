import React, { Component } from 'react';
import displayphoto from '../images/displayphoto.jpg'

export default class AboutPage extends Component {
    render() {
        return(
            <section id="about" className="section pp-scrollable about text-dark" data-navigation-color="#fff" data-navigation-tooltip="ABOUT ME">
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                        <div className="row">
                            <div className="title-small">
                                <p className="text-dark">About me</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <img src={displayphoto} alt="/" className="rounded img-thumbnail w-100"/>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-8 personal-item  mb-4 mb-lg-0">
                                {/* <h2 className="text-dark mb-2">Ming <span className="base-color">Yang</span></h2> */}
                                {/* <h5 className="text-dark mb-3">Ming Yang</h5> */}
                                <div className="row">
                                  <div className="col-lg-12 col-sm-6 personal-info">
                                          {/* <p className="text-dark">Age : <span className="text-gray">22</span></p>
                                          <p className="text-dark">Degree : <span className="text-gray">Undergraduate, Computer Science</span></p>
                                          <p className="text-dark">Mail : <span className="text-gray">yongmingyang1998@gmail.com</span></p> */}
                                          {/* <p className="text-dark">Freelance : <span className="text-gray">Available</span></p> */}
                                          <p className="text-dark" style={{textAlign: "justify"}}>
                                            Hi! I'm Ming Yang, 23 years old and I'm currently based in Singapore, studying Computer Science at the National University of Singapore.    
                                            I love to tell stories and create through various mediums such as coding and photos. 
                                            In my free time, you can find me diving (always up for any spontaneous adventures), coding or shooting photos.
                                            
                                            (P.S. Teh/kopi bing are my daily go to)
                                          <br/>
                                          </p>
                                          <br/>
                                          <h5 className="text-dark mb-3">Here's what I'm currently working on this summer:</h5>
                                          <p className="text-dark" style={{textAlign: "justify"}}>
                                            <b>Mynorca:</b>
                                            <br/>
                                            An overlay tool to ease new employees into their workplace seamlessly by automatically identifying and explaining acronyms found in a company’s workspace.
                                          </p>
                                          <p className="text-dark" style={{textAlign: "justify"}}>
                                            <b>Internship:</b>
                                            <br/>
                                            Currently interning at IMDA Digital Services Lab (DSL) as a Software Engineer Intern, where I am working on a project known as
                                            AI Product Shopfloor which aims to equip SMEs in Singapore with AI tools.
                                          </p>
                                          <br/>
                                          <p className="text-dark" style={{textAlign: "justify"}}>
                                            Contact me at: <b>yong.mingyang@u.nus.edu</b>
                                            <br/>
                                            Copy of resume can be provided upon request.
                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div id="count-up" className="text-center">
                            <div className="container">
                                <div className="row mt-4"> */}
                                    {/* <!-- Item-01 --> */}
                                    {/* <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                                        <div className="count-icon">
                                            <i className="lni-download size-md"></i>
                                        </div>
                                        <div className="count-content">
                                            <span className="timer count-number" data-from="0" data-to="286" data-speed="5000">286</span>
                                        </div>
                                        <p className="mb-0 ">Files Download</p>
                                    </div> */}
                                    {/* <!-- Item-02 --> */}
                                    {/* <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                                        <div className="count-icon">
                                            <i className="lni-pencil-alt size-md"></i>
                                        </div>
                                        <div className="count-content">
                                            <span className="timer count-number" data-from="0" data-to="6549" data-speed="5000">6549</span>
                                        </div>
                                        <p className="mb-0">Project Done</p>
                                    </div> */}
                                    {/* <!-- Item-03 --> */}
                                    {/* <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                                        <div className="count-icon">
                                            <i className="lni-medall size-md"></i>
                                        </div>
                                        <div className="count-content">
                                            <span className="timer count-number" data-from="0" data-to="793" data-speed="5000">793</span>
                                        </div>
                                        <p className="mb-0">Get Award</p>
                                    </div> */}
                                    {/* <!-- Item-04 --> */}
                                    {/* <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                                        <div className="count-icon">
                                            <i className="lni-emoji-smile size-md"></i>
                                        </div>
                                        <div className="count-content">
                                            <span className="timer count-number" data-from="0" data-to="286" data-speed="5000">286</span>
                                        </div>
                                        <p className="mb-0">Happy Client</p>
                                    </div>
                                </div>
                            </div>
                          </div> */}
                    </div> 
                    </div>
                </div>
            </section>
        );
    }
}