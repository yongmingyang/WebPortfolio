import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

const Tab = ({tag, content}) => {
    return (
        <>
            {
                content.map(tabItem => {
                    return (
                        <PortfolioItem
                            id={tabItem.id}
                            title={tabItem.title}
                            image={Object.values(tabItem.image)}
                            tag={tag}
                            callback={tabItem.callback}
                        />
                    )
                })
            }
        </>
    )
}

export default Tab;