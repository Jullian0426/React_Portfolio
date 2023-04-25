import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className='row' id='navigation'>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </div>
    )
};

export default Navigation;