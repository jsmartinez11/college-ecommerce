import React from 'react';
import AboutUs from './NavbarElements/AboutUs';
import Home from './NavbarElements/Home';
import Contact from './NavbarElements/Contact';
import Shop from './NavbarElements/Shop';
import BusinessName from './NavbarElements/BusinessName';
import Logo from './NavbarElements/Logo';


function Navbar(){
    return (
        <div>
            <Logo />
            <BusinessName />
            <Home />
            <AboutUs />
            <Shop />
            <Contact />
            
        </div>
    );
}

export default Navbar;