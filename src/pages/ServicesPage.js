import React, { Component } from 'react';

export default class ServicesPage extends Component{
    render(){
        return(
            <section id="services" className="section pp-scrollable services" data-navigation-color="#fff" data-navigation-tooltip="SERVICES">
                 <div className="display-table">
                     <div className="display-content">
                        <div className="container">
                         <div className="row">
                             <div className="title-small">
                                 <p className="text-dark">My Services</p>
                             </div>
                             <div className="col-lg-12">
                                 <div className="text-left">
                                     <h2 className="text-dark mb-3">My <span className="base-color">Services</span></h2>
                                     <p className="text-muted">Services I Offer To My Clients</p>
                                 </div>
                             </div>
                         </div>
                         <div className="row mt-4"> */}
                             {/* <!-- Item 01 --> */}
                             <div className="col-lg-4 text-left">
                                 <div className="services-item">
                                     <div className="float-left mt-lg-1 d-inline-block services-icon">
                                         <i className="lni-brush-alt size-md base-color"></i>
                                     </div>
                                     <div className="services-content">
                                         <h5 className="mb-3">Graphic Design</h5>
                                         <p className="text-muted mb-0">In a professional context it often happens that private clients corder a publication to be made.</p>
                                     </div>
                                 </div>
                             </div> 
                             {/* <!-- Item 02 --> */}
                             <div className="col-lg-4 text-left">
                                 <div className="services-item">
                                     <div className="float-left mt-lg-1 d-inline-block services-icon">
                                         <i className="lni-check-mark-circle size-md base-color"></i>
                                     </div>
                                     <div className="services-content">
                                         <h5 className="mb-3">Bootstrap support</h5>
                                         <p className="text-muted mb-0">In a professional context it often happens that private clients corder a publication to be made.</p>
                                     </div>
                                 </div>
                             </div> 
                             {/* <!-- Item 03 --> */}
                             <div className="col-lg-4 text-left">
                                 <div className="services-item">
                                     <div className="float-left mt-lg-1 d-inline-block services-icon">
                                         <i className="lni-heart size-md base-color"></i>
                                     </div>
                                     <div className="services-content">
                                         <h5 className="mb-3">Portfolio of works</h5>
                                         <p className="text-muted mb-0">In a professional context it often happens that private clients corder a publication to be made.</p>
                                     </div>
                                 </div>
                             </div> 
                             {/* <!-- Item 04 --> */}
                             <div className="col-lg-4 text-left">
                                 <div className="services-item">
                                     <div className="float-left mt-lg-1  d-inline-block services-icon">
                                         <i className="lni-mobile size-md base-color"></i>
                                     </div>
                                     <div className="services-content">
                                         <h5 className="mb-3">Responsive Theme</h5>
                                         <p className="text-muted mb-0">In a professional context it often happens that private clients corder a publication to be made.</p>
                                     </div>
                                 </div>
                             </div> 
                             {/* <!-- Item 05 --> */}
                             <div className="col-lg-4 text-left">
                                 <div className="services-item">
                                     <div className="float-left mt-lg-1 d-inline-block services-icon">
                                         <i className="lni-world size-md base-color mb-0"></i>
                                     </div>
                                     <div className="services-content">
                                         <h5 className="mb-3">Go Beyond Limits</h5>
                                         <p className="text-muted mb-0">In a professional context it often happens that private clients corder a publication to be made.</p>
                                     </div>
                                 </div>
                             </div> */
                             {/* <!-- Item 06 --> */}
                             <div className="col-lg-4 text-left">
                                 <div className="services-item">
                                     <div className="float-left mt-lg-1 d-inline-block services-icon">
                                         <i className="lni-cup size-md base-color"></i>
                                     </div>
                                     <div className="services-content">
                                         <h5 className="mb-3">Premium Slider</h5>
                                         <p className="text-muted mb-0">In a professional context it often happens that private clients corder a publication to be made.</p>
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