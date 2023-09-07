import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <h3>Log In</h3>
                <label>User Name: <input userName="userName" defaultValue="Enter your personal user name"/></label>
                <label>Password: <input password="password" defaultValue="Enter your secret password"/></label>
            </div>
        )
    }
}