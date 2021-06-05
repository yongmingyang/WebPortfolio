import React, { Component } from 'react'
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <header>
                 <div className="logo-area">
                     <Link to="/" className="logo">
                         <span className="size-sm mb-0 font-weight-bold pl-3 text-dark text-left">M.<span className="base-color">Y.</span></span>
                     </Link>
                 </div>
                 <div className="header-info-area">
                     <a className="overlay-menu-toggler lni-menu size-md" href="javascript:void(0);"></a>
                     {/* <!--    Overlay Menu Start    --> */}
                     <Menu/>
                     {/* <!--    Overlay Menu End    --> */}
                 </div>
             </header>
        );
    }
}