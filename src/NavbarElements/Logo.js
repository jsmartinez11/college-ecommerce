import React from "react";

const customStyle = {
    position: 'fixed',
    left: '5%',
    top: '30px'

};

function Logo(){
    return(
        <div style = {customStyle}>  
            <img className = "logo-styling" src = "./NavbarElements/images/CCLogo.jpg" alt = "Logo"></img>
        </div>
    );
}

export default Logo;