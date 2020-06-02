import React, { Component } from 'react'

export default class SkillBar extends Component{
    render(){
        console.log(typeof this.props.profficiency);
        return(
            <div className="skillbar clearfix " data-percent={`${this.props.proficiency}`}>
                <div className="skillbar-title"><span>{this.props.skillname}</span></div>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">{this.props.proficiency}</div>
            </div>
        );
    }
}