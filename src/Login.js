import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    render() {
        return (
        <div>
            <div className='loginContainer'>
                <div id='login'>
                    <h3 className='h3login'>Log In</h3>
                    <div className='row'>
                        <div className="loginInput">
                            <label htmlFor="userName">User Name:</label>
                            <input id="userName" placeholder="User Name"></input>
                        </div>
                        <div className="loginInput">
                            <label htmlFor="password">Password:</label>
                            <input id="password" placeholder="Password"></input>
                        </div>
                        <div className="loginInput">
                            <button type="submit" className="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}