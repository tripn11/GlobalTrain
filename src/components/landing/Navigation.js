import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/GlobalTrain-logo.png';

export default (props) => {    
    const updateActiveLink = () => {
        const links = document.querySelectorAll('a');
        for (let i = 0; i < links.length; i++) {
            if (links[i].dataset.target === props.activeComponent) {
                links[i].classList.add('active');
            } else {
                links[i].classList.remove('active');
            }
        }
    }


    updateActiveLink();
    // navAdjuster();

    

    return (
    <div ref={ props.homeRef } id='home' className='component'>
        <div className="centered">
            <img src={logo} alt='company logo'/>
            <span id='nav'>
                <a href="/#hero" onClick={props.scrollToHome} data-target="home">Home</a>
                <a href="/#welcome" onClick={props.scrollToWelcome} data-target="welcome"> About us</a>
                <a href='/#services' onClick={props.scrollToServices} data-target="services"> Our Services</a>
                <a href="/#contact" onClick={props.scrollToContact} data-target="contact"> Contact us</a>
            </span>  
            <Link to='/tracker' id="home-link">Track Package</Link>
        </div>
    </div>
    )
    
}

//the component must have an id for it to work, then the useRef too was important for the selection of the component.
