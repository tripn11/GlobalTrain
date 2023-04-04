import React from "react";
import { Link } from "react-router-dom";
import ship from '../../Images/ship.jpg';
import truck from '../../Images/truck.jpg';
import plane from '../../Images/plane.jpg';


export default () => (
    <div className="component" id="hero">
        <div>
            <img src={ship} alt='aeroplane' />
            <img src={truck} alt='aeroplane' />
            <img src={plane} alt='aeroplane' />
        </div>
        <div>
            <p>GLOBALTRAIN LOGISTICS</p>
            <p>We are reliable and professional</p>
            <Link to='/tracker'>TRACK PACKAGE</Link>
        </div>
    </div>
)