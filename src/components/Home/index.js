import React from "react";
import AppHeader from "../AppHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Start from "./Start";
import AboutApp from "./AboutApp";
import AboutUs from "./AboutUs";
import Foundations from "./Foundations";
import Contact from "./Contact";

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