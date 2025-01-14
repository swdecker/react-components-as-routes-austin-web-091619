import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink
                    to='/'
                    exact
                    style={linkStyle}
                    activeStyle={{background:'darkblue'}}
                    >
                    Home
                </NavLink>
                <NavLink
                    to='/about'
                    exact
                    style={linkStyle}
                    activeStyle={{background:'darkblue'}}
                    >
                    About
                </NavLink>
                <NavLink
                    to='/login'
                    exact
                    style={linkStyle}
                    activeStyle={{background: 'darkblue'}}
                >Login</NavLink>
        </div>
        )
    }
}
