import React, { Component, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioItem extends Component{
    render(){

        const { title, image, callback } = this.props;

        return(
            <>
                <div className={`col-lg-6 portfolio-item my-3`}>
                    <div className="portfolio-item-content rounded">
                        <img src={image} alt="/"/>
                        <div className="img-overlay text-center">
                            <div className="img-overlay-content">
                                <button className="link" onClick={callback}>
                                    <h4 className="text-secondary mt-3 mb-0"><b>{title}</b></h4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}