import React from "react";

const customStyle = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '10%',
    top: '30px'

};

function BusinessName(){
    return(
        <div style = {customStyle}>  
            <h2>College-Ecommerce</h2>
        </div>
    );
}

export default BusinessName;