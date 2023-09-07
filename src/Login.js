import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default class Login extends Component {
    render() {
        return (
        <div id="login">
            <h3 className='h3login border border-5 border-primary'>test again</h3>
            <div className='row'>
                <div id="loginInput" className='col'>
                    <label>User Name: <input userName="userName" defaultValue="Enter your personal user name" /></label>
                    <label>Password: <input password="password" defaultValue="Enter your secret password" /></label>
                </div>
            </div>
        </div>
        )
    }
}