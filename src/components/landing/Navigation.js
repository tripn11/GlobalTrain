import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/GlobalTrain-logo.png';

export default (props) => (
    <div ref={ props.homeRef } id='home' >
        <img src={logo} alt='company logo'/>
        <a href="/#home" onClick={props.scrollToHome}>Home</a>
        <a href="/#welcome" onClick={props.scrollToWelcome} > About us</a>
        <a href='/#services' onClick={props.scrollToServices} > Our Services</a>
        <a href="/#contact" onClick={props.scrollToContact}> Contact us</a>
            
        <Link to='/tracker'>Track Package</Link>
    </div>
)

//the component must have an id for it to work, then the useRef too was important for the selection of the component.
