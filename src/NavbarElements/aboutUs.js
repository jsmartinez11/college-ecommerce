import React from "react";

const customStyle = {
    color: "red",
    fontSize: "20px",
    position: 'fixed',
    left: '80%',
    top: '30px'

};

function AboutUs(){
    return(
        <div style = {customStyle}>  
            <h2>About Us</h2>
        </div>
    );
}



export default AboutUs;