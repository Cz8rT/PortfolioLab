import React from "react";
import Achevement from "./Achievement/Achievement";

const HomeThreeColumns = ({ id }) => {
    return (
        <section id={id}>
            <Achevement number={10} title={"oddanych worków"}/>
            <Achevement number={5} title={"wspartych organizacji"}/>
            <Achevement number={7} title={"zorganizowanych zbiórek"}/>
        </section>
    )
};

export default HomeThreeColumns;