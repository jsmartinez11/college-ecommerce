import React from 'react';
import AboutUs from './NavbarElements/AboutUs';
import Home from './NavbarElements/Home';
import Contact from './NavbarElements/Contact';
import Shop from './NavbarElements/Shop';
import BusinessName from './NavbarElements/BusinessName';
import Logo from './NavbarElements/Logo';
import './Navbar.css';

function Navbar(){
    return (
        <div className='heading'>
            <div><Logo /></div>
            <div style={companyButton}><BusinessName /></div>
            <div style={homeButton}><Home /></div>
            <div style={shopButton}><Shop /></div>
            <div style={aboutUsButton}><AboutUs /></div>
            <div style={contactButton}><Contact /></div>
        </div>
    );
}

const contactButton = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '85%',
    top: '15px'
};

const companyButton = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '10%',
    top: '15px'
};

const homeButton = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '60%',
    top: '15px'
};

const shopButton = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '68%',
    top: '15px'
};

const aboutUsButton = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '75%',
    top: '15px'
};

export default Navbar;