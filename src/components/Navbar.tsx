import React, { FunctionComponent } from 'react';

const Navbar:FunctionComponent = () => {
    
    return(
        <nav className="navbar">
            <div className="navbar-title">
                <h1>CodeWizard</h1>
            </div>
            <div className="navbar-items">
                <a href="/">Home</a>
                <a href="/cheatsheet">Cheatsheet</a>
                <a href="/about">About</a>
                <a href="https://github.com/dev-ardha/codewizard">GitHub</a>
            </div>
        </nav>
    )
}

export default Navbar;