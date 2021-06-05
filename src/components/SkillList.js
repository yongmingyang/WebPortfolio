import React, { Component } from 'react';
import SkillBar from './SkillBar';

export default class SkillList extends Component{
    render(){
        var counter = 0;
        const listItems = this.props.content.map(
            (skill) => {
                counter++;
                return <SkillBar
                // proficiency={skill.proficiency}
                skillname={skill.name}
            />
            }
        )
        return (
            <div className="col-lg-6">
                <h3 className="text-dark mb-3">{this.props.title}</h3>
                <br/>
                <div className="skill-box pt-4 pt-lg-0 mt-4 mt-lg-0">
                    {listItems}
                </div>
            </div>
        );
    }
}