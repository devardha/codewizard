import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar:FunctionComponent = () => {
    
    return(
        <nav className="navbar">
            <div className="navbar-title">
                <h1>CodeWizard</h1>
            </div>
            <div className="navbar-items">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cheatsheet">Cheatsheet</NavLink>
                <NavLink to="/about">About</NavLink>
                <a href="https://github.com/dev-ardha/codewizard">GitHub</a>
            </div>
        </nav>
    )
}

export default Navbar;