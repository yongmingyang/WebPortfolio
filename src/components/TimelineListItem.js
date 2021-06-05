import React, { Component } from 'react';

export default class TimelineListItem extends Component{
    render(){
        return(
            <li key={this.props.id}>
                <h6 className="base-color">{this.props.title}</h6>
                <small className="text-muted ">{this.props.duration}</small>
                <p className="text-dark py-3">{this.props.description}</p>
            </li>
        );
    }
}