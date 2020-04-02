import React, {useState} from "react";
import FoundationType from "./FoundationType/FoundationType";

const Foundations = ({id}) => {
    const [type, setType] = useState(1);

    const buttonClickHandler = (e) => {
        setType(+e.target.value);
    };

    return (
        <section id={id}>
            <div className={"title_container"}>
                <h3>Komu pomagamy?</h3>
            </div>
            <div className={"btn_container"}>
                <button onClick={buttonClickHandler}
                        className={type === 1 ? "active" : ""}
                        value={1}>Fundacjom</button>
                <button onClick={buttonClickHandler}
                        className={type === 2 ? "active" : ""}
                        value={2}>Organizacjom<br/>pozarządowym</button>
                <button onClick={buttonClickHandler}
                        className={type === 3 ? "active" : ""}
                        value={3}>Lokalnym<br/>zbiórkom</button>
            </div>
            {type === 1 && <FoundationType text={"FoundationType 1"}/>}
            {type === 2 && <FoundationType text={"FoundationType 2"}/>}
            {type === 3 && <FoundationType text={"FoundationType 3"}/>}
        </section>
    )
};

export default Foundations;