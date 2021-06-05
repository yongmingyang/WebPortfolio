import React, { Component } from 'react';
import TimelineListItem from './TimelineListItem';

export default class Timeline extends Component{
    render(){
        var counter = 0;
        const listItems = this.props.content.map(
            (post) => {
                counter++;
                return <TimelineListItem
                    id={counter}
                    title={post.title}
                    duration={post.duration}
                    description={post.description}
                />
                
            }
        )
        return (
            <div className="col-lg-6 col-sm-12">
                <h3 className="text-dark mb-2"><i className={this.props.icon}></i>{this.props.title}</h3>
                <ul className="timeline">
                    {listItems}
            </ul>
        </div>
        );
    }
}