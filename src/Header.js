/*
 *
 * App header with links to pages
 *
 */

import React, { Component } from 'react';
import './MainPage/MainPage.css';
import { Link } from 'react-router-dom';



class Header extends Component {
    render() {
        return (
            <header>
                <div className="centerContent">
                    <div className="fixer">
                        <div className="gradient">
                            <div className="navigation centerContent">
                                <nav className="centerContent ">
                                    <Link to='/'>HOME</Link>
                                    <Link to='/favorites'>FAVORITES</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}



export default Header;
