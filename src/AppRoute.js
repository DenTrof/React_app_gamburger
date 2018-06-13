/*
 *
 * App routes
 *
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import Favorites from './MainPage/Favorites'

const AppRoutePages = () => (
    <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/favorites' component={Favorites}/>
    </Switch>
);

export default AppRoutePages
