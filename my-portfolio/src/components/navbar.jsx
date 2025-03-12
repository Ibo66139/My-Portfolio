import React, { Component } from "react";

class Navbar extends Component {
    state = {};
    
    render() {
        return (

        <nav className="Navbar">
            <a href="/home">Home</a>

        <div className="nav-links">
                <a href="/projects">Projects</a>
                <a href="/about">About Me</a>
                <a href="/contact">Contact</a>
        </div>
            
            
        </nav>

        );
    }
}

export default Navbar;
