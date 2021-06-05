import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

export default class Tab extends Component{
    render(){
        const tag = this.props.tag;
        const listItems = this.props.content.map(
            (tabItem) => {
                console.log(tabItem.id);
                return <PortfolioItem
                    id={tabItem.id}
                    title={tabItem.title}
                    image={Object.values(tabItem.image)}
                    tag={tag}
            />
            }
        )
        return (
            <>
                {listItems}
            </>
        );
    }
}