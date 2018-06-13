/*
 *
 * App with main components
 *
 */

import React from 'react'
import AppRoutePages from './AppRoute'
import Header from "./Header";


export default function App(){
    return(
        <div>
            <Header/>
            <AppRoutePages />
        </div>
    )
}