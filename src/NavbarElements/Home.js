import React from "react";

const customStyle = {
    color: "gray",
    fontSize: "15px",
    position: 'fixed',
    left: '60%',
    top: '10px'

};

function Home(){
    return(
        <div style = {customStyle}>  
            <h2>Home</h2>
        </div>
    );
}

export default Home;