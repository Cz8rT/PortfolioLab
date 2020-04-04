import React from "react";
import facebookImg from "./../../../assets/Facebook.svg";
import instagramImg from "./../../../assets/Instagram.svg";
import ContactForm from "./ContactForm/ContactForm";

const Contact = ({ id }) => {
    return (
        <section id={id}>
            <div id={"contact_container"}>
                <div id={"imgContact"}/>
                <div id={"contactForm"}>
                    <ContactForm/>
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