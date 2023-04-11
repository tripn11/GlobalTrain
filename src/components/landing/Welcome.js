import React, { useEffect } from "react";
import truck from '../../Images/truck.jpg';

export default (props) => {
    useEffect(()=>{
        const points = document.querySelectorAll('.point')
        console.log(points)
        points.forEach((point)=>{
            point.addEventListener('click', ()=>{
                points.forEach((each)=>{
                    each.classList.remove('opened')
                })
                point.classList.add('opened')
            })
        })
    })

    return (
    <div ref={ props.welcomeRef } id='welcome' className="component centered">
        <div>
            <p>WELCOME TO</p>
            <h1>GLOBALTRAIN LOGISTICS</h1>
            <p>GLOBALTRAIN LOGISTICS is an organization that specializes in freight forwarding for both air and sea 
                transportation, as well as handling bulk and project shipments. Our team consists of highly skilled and 
                experienced staff members who are dedicated to ensuring seamless shipping operations and port management.
            </p>
            <img src={truck} alt='ship for logistics'/>
        </div>
        <div id="point-container">
            <div className='point opened'>
                <h3>Our Mission</h3>
                <p>+</p>
                <p>Our mission is to consistently surpass our customers' expectations by delivering exceptional 
                   freight forwarding and transportation solutions worldwide, which includes air and ocean services, 
                   customs brokerage, and logistics support. Our top priority is to provide our clients with a 
                   competitive edge by offering a personalized, dependable, and reliable logistical support system 
                   that they can count on every time.
                </p>
            </div>

            <div className='point'>
                <h3>Our Vision</h3>
                <p>+</p>
                <p>At GLOBALTRAIN LOGISTICS, our vision is to become a leading global logistics and transportation 
                    solutions provider that is recognized for its reliability, efficiency, and exceptional customer 
                    service. We strive to continuously improve our operations and expand our reach, while maintaining 
                    our commitment to sustainability and social responsibility.
                </p>
            </div>

            <div className='point'>
                <h3>Our Team</h3>
                <p>+</p>
                <p>At GLOBALTRAIN LOGISTICS, we take pride in our dedicated and experienced team of professionals who 
                    are passionate about delivering superior logistics and transportation solutions to our clients. 
                    With a wealth of industry knowledge and a customer-centric approach, our team is committed to 
                    providing exceptional service and building lasting relationships with our clients. We believe in 
                    investing in our team's growth and development, and we foster a culture of collaboration, 
                    innovation, and continuous learning.
                </p>
            </div>
        </div>

    </div>
)}