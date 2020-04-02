import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import Start from "./Start/Start";
import AboutApp from "./AboutApp/AboutApp";
import AboutUs from "./AboutUs/AboutUs";
import Foundations from "./Foundations/Foundations";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <>
            <section className={"main_section"}>
                <div id={"homeHero_img"} />
                <div id={"headerStart_container"}>
                    <HomeHeader/>
                    <Start id="start"/>
                </div>
            </section>
            <AboutApp id="aboutApp"/>
            <AboutUs id="aboutUs"/>
            <Foundations id="foundations"/>
            <Contact id="contact"/>
            <HomeThreeColumns/>
        </>
    );
};

export default Home;