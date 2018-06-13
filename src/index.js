/*
 *
 * Main component
 *
 */

import React from 'react';
import { render } from 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const renderApp = () => {
    render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>,
        document.querySelector('#root')
    )
};

renderApp(App);