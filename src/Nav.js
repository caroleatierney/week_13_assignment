import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navBar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
            </nav>
        )
    }
}