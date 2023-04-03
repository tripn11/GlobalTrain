import React from "react";
import ship from '../Images/ship.jpg';
import truck from '../Images/truck.jpg';
import plane from '../Images/plane.jpg';


export default () => (
    <div>
        <div>
            <img src={ship} alt='aeroplane' />
            <img src={truck} alt='aeroplane' />
            <img src={plane} alt='aeroplane' />
        </div>
        <div>
            <p>GLOBALTRAIN LOGISTICS</p>
            <p>We are reliable and professional</p>
            <button>TRACK PACKAGE</button>
        </div>
    </div>
)