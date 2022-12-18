import React from "react";

const customStyle = {
    position: 'fixed',
    left: '2%',
    top: '3px'

};

function Logo(){
    return(
        <div>  
            <img style = {customStyle} src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cc.logo.circle.svg/800px-Cc.logo.circle.svg.png" alt = "Logo" height="80px" width = "80px"/>
        </div>
    );
}

export default Logo;