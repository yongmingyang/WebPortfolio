import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import ThailandPage from "../pages/projectPages/ThailandPage";
import InstaWearPage from "../pages/projectPages/InstaWearPage";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/BYF" component={ThailandPage}/>
        <Route path="/InstaWear" component={InstaWearPage}/>
    </Switch>
)

export default Routes;