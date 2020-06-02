import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            // <div id="footer" className="section pp-scrollable footer" data-navigation-color="#fff" data-navigation-tooltip="FOOTER" data-background-image="http://placehold.it/1920x1280">
                 <div className="container-fluid">
                     <div className="row py-6">
                         {/* <div className="title-small">
                             <p className="text-dark">Footer</p>
                         </div> */}
                         <div className="text-center m-auto">
                             <p className="text-dark size-sm">Ming <span className="base-color">Yang</span></p>
                             <ul className="list-inline socails">
                                <li className="list-inline-item"><a href="https://www.instagram.com/yongmingyang"><i className="lni-instagram-filled text-dark"></i></a></li>
                                <li className="list-inline-item"><a href="https://github.com/yongmingyang"><i className="lni-github-original text-dark"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/yong-ming-yang-158379165/"><i className="lni-linkedin-original text-dark"></i></a></li>
                             </ul>
        
                         </div>
                     </div>
                 </div>
            //  </div>
        );
    }
}