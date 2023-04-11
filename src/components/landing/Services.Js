import React from "react";


export default (props) => (
    <div ref={ props.servicesRef } id='services' className='component centered'>
        <h2>LOGISTICS SOLUTIONS</h2>

        <p>We offer comprehensive logistics and transportation solutions worldwide, covering sea, land, and air 
            transport modes. With a strong commitment to risk management and liability protection, we would like to 
            extend our services as your trusted project cargo handler in Nigeria and other African countries. Our 
            team ensures the safe and efficient handling of your project cargo to and from Nigeria, with live 
            updates on the status and location of your shipment.
        </p>

        <div id="services-stats">
            <div>
                <p>98%</p>
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
        
    </div>
)