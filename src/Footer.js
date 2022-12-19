import React from "react";
import "../src/Footer.css";

function Footer(){
    return (
        <div className="footer">
            <div className="top">
                    <div className="field">
                    <h2>Categories</h2>
                        <span>Electronics</span>
                        <span>Clothing</span>
                        <span>Shoes</span>
                        <span>Accessories</span>
                        <span>Books</span>
                    </div>
                    <div className="field">
                    <h2>Links</h2>
                        <span>FAQ</span>
                        <span>Pages</span>
                        <span>Store</span>
                        <span>Compare</span>
                        <span>Cookies</span>
                    </div>
                    <div className="field">
                        <h2>About</h2>
                        <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud eu fugiat nulla pariatur. Ex
                        </span>
                    </div>
                    <div className="field">
                        <h2>Contact Us</h2>
                        <span>
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore 
                        </span>
                    </div>
            </div>
            <div className="bottom">
                <div className="left">
                <span className="logo">college-ecommerce</span>
                <span className="copyright">Copyright all rights reserved</span>
                </div>
                <div className="right">
                <img src="/Users/mnv/college-ecommerce/src/NavbarElements/images/payment.png" alt="payment"></img>
                </div>
            </div>
        </div>
    );
}

export default Footer;