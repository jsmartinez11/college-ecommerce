import React from "react";

const customStyle = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '75%',
    top: '10px'

};

function AboutUs(){
    return(
        <div style = {customStyle}>  
            <h2>About Us</h2>
        </div>
    );
}



export default AboutUs;