import React from "react";
import package1 from '../../Images/packages1.jpg';
import package2 from '../../Images/packages2.jpg';
import package3 from '../../Images/packages3.jpg';
import package4 from '../../Images/packages4.jpg';
import package5 from '../../Images/packages5.jpg';
import package6 from '../../Images/packages6.jpg';

export default (props) => (
    <div ref={ props.servicesRef } id='services'>
        <h2>LOGISTICS SOLUTIONS</h2>

        <p>We offer comprehensive logistics and transportation solutions worldwide, covering sea, land, and air 
            transport modes. With a strong commitment to risk management and liability protection, we would like to 
            extend our services as your trusted project cargo handler in Nigeria and other African countries. Our 
            team ensures the safe and efficient handling of your project cargo to and from Nigeria, with live 
            updates on the status and location of your shipment.
        </p>

        <div>
            <img src={package1} alt='sample packages of goods' />
            <img src={package2} alt='sample packages of goods' />
            <img src={package3} alt='sample packages of goods' />
            <img src={package4} alt='sample packages of goods' />
            <img src={package5} alt='sample packages of goods' />
            <img src={package6} alt='sample packages of goods' />
        </div>

        <div>
            <p>96%</p>
            <p>TONNES TRANSPORTED</p>
        </div>

        <div>
            <p>225</p>
            <p>COMPANY EMPLOYEES</p>
        </div>

        <div>
            <p>97%</p>
            <p>WORLDWIDE DELIVERY</p>
        </div>

        <div>
            <p>100%</p>
            <p>CLIENT SATISFACTION</p>
        </div>
    </div>
)