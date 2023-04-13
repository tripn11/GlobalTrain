import React, { useEffect } from "react";
import package3 from '../../Images/packages3.jpg'

export default (props) => {
    useEffect(()=>{
        document.addEventListener('scroll',()=>{
            const contactContainer = document.querySelector('#contact > div:nth-child(2)')

            if(window.scrollY + window.innerHeight > 
                contactContainer.offsetTop + contactContainer.parentElement.offsetTop + contactContainer.offsetHeight) {
                    contactContainer.classList.add('anime')
            }else {
                contactContainer.classList.remove('anime')
            }
        })
    }, [])

    return (
    <div ref={ props.contactRef } id='contact' className="component">
        <div style={{backgroundImage:`linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)),url(${package3})`}}>
            <h3>GLOBALTRAIN LOGISTICS</h3>
            <h2>Affordable Logistics Solutions</h2>
        </div>
        <div>
            <p>SCHEDULE AN APPOINTMENT</p>
            <div>
                <div className="contact-container">
                    <ion-icon name="call"></ion-icon>
                    <p>PHONE</p>
                    <p>+234000000000</p>
                </div>

                <div className="contact-container">
                    <ion-icon name="mail"></ion-icon>
                    <p>EMAIL</p>
                    <p>globaltrain@gmail.com</p>
                </div>

                <div className="contact-container">
                    <ion-icon name="location"></ion-icon>
                    <p>OFFICE</p>
                    <p>1 lololo, Nigeria</p>
                </div>

                <div className="contact-container">
                    <ion-icon name="time"></ion-icon>
                    <p>HOURS</p>
                    <p>Everyday</p>
                </div>
            </div>
            
        </div>

        
        <form className='centered' name='contact'>
            <h2>Get in Touch</h2>
            <input placeholder="Your name" name="name"/>
            <input placeholder="Email Address" name="email"/>
            <input placeholder="Company Name" name="company name"/>
            <input placeholder="Website" name="company site"/>
            <textarea placeholder='Your Message' name="message" rows={6}/>
            <button>SUBMIT</button>
        </form>
    </div>
)}