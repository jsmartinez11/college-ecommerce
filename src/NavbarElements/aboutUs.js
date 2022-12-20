import React from "react";
import "../Navbar.css";

const customStyle = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '75%',
    top: '10px'
    

};

function AboutUs(){
    return(
        <div style = {customStyle} className = 'background'>  
            <h2>About Us</h2>
        </div>
    );
}



export default AboutUs;