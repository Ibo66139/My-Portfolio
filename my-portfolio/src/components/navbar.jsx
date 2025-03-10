import React, { Component } from "react";

class Navbar extends Component {
    state = {};
    
    render() {
        return (

        <nav>
            <a href="/home">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About Me</a>
            <a href="/contact">Contact</a>
        </nav>
        
        );
    }
}

export default Navbar;
