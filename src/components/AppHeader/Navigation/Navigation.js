import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="homeThreeColumns" activeClass="active" spy={true} smooth={true} duration={500} >Start</Link></li>
                <li><Link to="aboutApp" activeClass="active" spy={true} smooth={true} duration={500} >O co chodzi?</Link></li>
                <li><Link to="aboutUs" activeClass="active" spy={true} smooth={true} duration={500} >O nas</Link></li>
                <li><Link to="foundations" activeClass="active" spy={true} smooth={true} duration={500} >Fundacja i organizacje</Link></li>
                <li><Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
            </ul>
        </nav>
    )
};

export default Navigation;