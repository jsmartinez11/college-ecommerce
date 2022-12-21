import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Navbar.css';

ReactDOM.render(
    <div className='background-color'>
        <Navbar/>
        <Footer/>
    </div>
,
document.getElementById('root')
);

