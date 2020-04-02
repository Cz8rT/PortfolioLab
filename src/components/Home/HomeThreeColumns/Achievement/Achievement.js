import React from "react";

const Achevement = ({number, title}) => {
    return (
        <div className={"achievement_container"}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div>
    )
};

export default Achevement;