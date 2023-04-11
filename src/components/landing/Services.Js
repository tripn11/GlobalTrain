import React, { useEffect } from "react";
import package1 from '../../Images/packages1.jpg';
import package2 from '../../Images/packages2.jpg';
import package3 from '../../Images/packages3.jpg';
import package4 from '../../Images/packages4.jpg';
import package5 from '../../Images/packages5.jpg';
import package6 from '../../Images/packages6.jpg';


export default (props) => {
    useEffect(() => {
        const indicators = document.querySelectorAll('#services-stats > div > p:first-child');
        const container = document.getElementById('services-stats')
        let level;
        document.addEventListener('scroll', () => {
            if(window.scrollY + window.innerHeight > container.offsetTop + container.parentElement.offsetTop 
                && window.scrollY < container.offsetTop + container.parentElement.offsetTop) {
                    level = ((window.scrollY + window.innerHeight) - 
                    (container.offsetTop + container.parentElement.offsetTop)) / (window.innerHeight/2)
                    level = level > 1 ? 1 : level
                    indicators[0].innerHTML= `${Math.ceil(96*level)}%`
                    indicators[1].innerHTML= Math.ceil(225*level)
                    indicators[2].innerHTML= `${Math.ceil(97*level)}%`
                    indicators[3].innerHTML= `${Math.ceil(100*level)}%`

            }
        })
    },[])

    return (
        <div ref={ props.servicesRef } id='services' className='component centered'>

            <p>We offer comprehensive logistics and transportation solutions worldwide, covering sea, land, and air 
                transport modes. With a strong commitment to risk management and liability protection, we would like to 
                extend our services as your trusted project cargo handler in Nigeria and other African countries. Our 
                team ensures the safe and efficient handling of your project cargo to and from Nigeria, with live 
                updates on the status and location of your shipment.
            </p>

            <div id="services-image-container">
                <img src={package1} alt="packages" />
                <img src={package2} alt="packages" />
                <img src={package3} alt="packages" />
                <img src={package4} alt="packages" />
                <img src={package5} alt="packages" />
                <img src={package6} alt="packages" />
            </div>

            <div id="services-stats">
                <div>
                    <p></p>
                    <p>TONNES TRANSPORTED</p>
                </div>

                <div>
                    <p></p>
                    <p>COMPANY EMPLOYEES</p>
                </div>

                <div>
                    <p></p>
                    <p>WORLDWIDE DELIVERY</p>
                </div>

                <div>
                    <p></p>
                    <p>CLIENT SATISFACTION</p>
                </div>
            </div>
            
        </div>
    )
}