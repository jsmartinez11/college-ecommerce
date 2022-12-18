import React from "react";

const customStyle = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '10%',
    top: '10px'

};

function BusinessName(){
    return(
        <div style = {customStyle}>  
            <h2>College-Community</h2>
        </div>
    );
}

export default BusinessName;