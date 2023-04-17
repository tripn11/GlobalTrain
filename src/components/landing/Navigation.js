import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/GlobalTrain-logo.png';

export default (props) => { 
    useEffect(()=>{
        const menu = document.querySelectorAll('#mobile-menu > *');
        const nav = document.getElementById('nav')
        
        const openAndClose = (e) => {
            const name = e.target.getAttribute('name');
            if(name ==='menu-outline') {
                menu[0].style.visibility='hidden'
                menu[1].style.visibility='visible'
                menu[0].style.opacity='0'
                menu[1].style.opacity='1'
                nav.style.transform='translateX(0)'
            } else if (name === 'close-outline') {
                menu[0].style.visibility='visible';
                menu[1].style.visibility='hidden';
                menu[0].style.opacity='1'
                menu[1].style.opacity='0'
                nav.style.transform='translateX(10rem)'
            }
        }

        menu.forEach((item)=> item.addEventListener('click', openAndClose))
    }, [])

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

            <div id="mobile-menu">
                <ion-icon name="menu-outline"></ion-icon>
                <ion-icon name="close-outline"></ion-icon>
            </div>

            <Link to='/tracker' id="home-link">Track Package</Link>
        </div>
    </div>
    )
}

//the component must have an id for it to work, then the useRef too was important for the selection of the component.