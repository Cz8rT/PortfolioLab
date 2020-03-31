import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import Start from "./Start/Start";
import AboutApp from "./AboutApp/AboutApp";
import AboutUs from "./AboutUs/AboutUs";
import Fundations from "./Fundations/Fundations";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <Start name="start"/>
            <AboutApp/>
            <AboutUs/>
            <Fundations/>
            <Contact name={"contact"}/>
            <HomeThreeColumns/>
        </>
    );
};

export default Home;