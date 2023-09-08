import React, { Component } from 'react'
import './Nav.css';

// this is the component for the navbar that 
// is displayed at the top of the index page

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="projects">Projects</a></li>
                </ul>
            </nav>
        )
    }
}