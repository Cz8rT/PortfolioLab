import React from "react";

const Step = ({img, alt, title, description1, description2}) => {
    return (
        <div className={"step"}>
            <img src={img} alt={alt}/>
            <span>{title}</span>
            <div/>
            <span>{description1}</span>
            <span>{description2}</span>
        </div>
    )
};

export default Step;