import React from 'react';
import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import IconLinks from './IconLinks';

function Nav() {
    return (
    <nav className="navbar">
    <div className="nav-logo">
        <a href="#home"><img src={logo} alt="logo" className="logo-link"/></a>
    </div>
    {/* <!-- desktop  --> */}
    {/* <!-- <div className="desktop-nav"> --> */}
        <div className="nav-links">
        <PageLinks parentClass='nav-list' itemClass='nav-link' id='nav-list' />
        </div>
        <div className="nav-icons">
        <IconLinks parentClass='nav-icons-list' itemClass='nav-icon' />
        </div>
    {/* <!-- mobile  --> */}
    <div className="nav-mobile">
        <button type="button" className="nav-mobile-toggle" id="nav-mobile-toggle">
            <i className="fa-solid fa-bars"></i>
        </button>
        <PageLinks parentClass='mobile-nav-list' itemClass='mobile-nav-link' id='mobile-nav-list' />
        {/* <ul className="mobile-nav-list" id="mobile-nav-list">
            <li><a href="#home" className="mobile-nav-link">Home</a></li>
            <li><a href="#about" className="mobile-nav-link">About</a></li>
            <li><a href="#services" className="mobile-nav-link">Services</a></li>
            <li><a href="#tours" className="mobile-nav-link">Tours</a></li>
        </ul> */}
    </div>
    </nav>
    )
}

export default Nav