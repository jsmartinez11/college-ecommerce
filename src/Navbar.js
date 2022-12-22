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
    color: "black",
    fontSize: "15px",
    position: 'absolute',
    left: '85%',
    top: '20px',
    
};

const companyButton = {
    color: "black",
    fontSize: "15px",
    position: 'absolute',
    left: '10%',
    top: '20px'
};

const homeButton = {
    color: "black",
    fontSize: "15px",
    position: 'absolute',
    left: '60%',
    top: '20px'
};

const shopButton = {
    color: "black",
    fontSize: "15px",
    position: 'absolute',
    left: '68%',
    top: '20px'
};

const aboutUsButton = {
    color: "black",
    fontSize: "15px",
    position: 'absolute',
    left: '75%',
    top: '20px'
};

export default Navbar;