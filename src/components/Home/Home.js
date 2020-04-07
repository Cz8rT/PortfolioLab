import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import Start from "./Start/Start";
import AboutApp from "./AboutApp/AboutApp";
import AboutUs from "./AboutUs";
import Foundations from "./Foundations/Foundations";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <>
            <section className={"main_section"}>
                <div id={"homeHero_img"}/>
                <div id={"headerStart_container"}>
                    <AppHeader/>
                    <Start id="start"/>
                </div>
            </section>
            <HomeThreeColumns id="homeThreeColumns"/>
            <AboutApp id="aboutApp"/>
            <AboutUs id="aboutUs"/>
            <Foundations id="foundations"/>
            <Contact id="contact"/>
        </>
    );
};

export default Home;