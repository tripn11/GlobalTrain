import React from "react";
import { Link } from "react-router-dom";
import ship from '../../Images/Ship.jpg';
import plane from '../../Images/plane.jpg';


export default () => (
    <div className="component" id="hero">
        <div>
            <div id="image-container">
                <div id="image1" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${ship}` }}></div>
                <div id="image2" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${plane})` }}></div>
            </div>
            <div id="hero-content">
                <p>GLOBALTRAIN LOGISTICS</p>
                <p>We are reliable and professional</p>
                <Link to='/tracker'>TRACK PACKAGE</Link>
            </div>
        </div>
    </div>
)