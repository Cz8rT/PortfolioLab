import React from "react";
import facebookImg from "./../../../assets/Facebook.svg";
import instagramImg from "./../../../assets/Instagram.svg";

const Contact = ({ id }) => {
    return (
        <section id={"contact"}>
            <div id={"form_container"}>
                <div id={"imgForm"}/>
                <div id={"contactForm"}>
                    <form>fdsfsdfsd</form>
                </div>
            </div>
            <footer>
                <span>Copyright by Coders Lab</span>
                <div>
                    <img src={facebookImg} alt={"facebook icon"}/>
                    <img src={instagramImg} alt={"instagram icon"}/>
                </div>
            </footer>
        </section>
    )
};

export default Contact;