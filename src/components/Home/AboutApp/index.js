import React from "react";
import {Link} from "react-router-dom";
import Step from "./Step/Step";
import imgShirt from "./../../../assets/Icon-1.svg";
import imgBag from "./../../../assets/Icon-2.svg";
import imgLoupe from "./../../../assets/Icon-3.svg";
import imgCycle from "./../../../assets/Icon-4.svg";

const AboutApp = ({id}) => {
    return (
        <div id={id}>
            <div className={"title_container"}>
                <h4>Wystarczą 4 proste kroki</h4>
            </div>
            <div className={"steps_container"}>
                <Step img={imgShirt} alt={"T-shirt"} title={"Wybierz rzeczy"} description1={"ubrania, zabawki,"} description2={"sprzęt i inne"}/>
                <Step img={imgBag} alt={"Bag"} title={"Spakuj je"} description1={"skorzystaj z"} description2={"worków na śmieci"}/>
                <Step img={imgLoupe} alt={"Magnifying glass"} title={"Zdecyduj komu chcesz pomóc"} description1={"wybierz zaufane"} description2={"miejsce"}/>
                <Step img={imgCycle} alt={"Cycle arrows"} title={"Zamów kuriera"} description1={"kurier przyjedzie"} description2={"w dogodnym terminie"}/>
            </div>
            <Link className="loginLink" to={'/logowanie'}>
                <button>oddaj<br/>rzeczy</button>
            </Link>
        </div>
    )
};

export default AboutApp;