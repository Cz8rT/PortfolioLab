import React, {useState} from "react";
import FoundationType from "./FoundationType/FoundationType";
import {foundationsList} from "./FoundationArrays/foundationsList";
import {organizationsList} from "./FoundationArrays/organizationsList";
import {localList} from "./FoundationArrays/localList";

const Foundations = ({id}) => {
    const [type, setType] = useState(1);

    // Switching between tabs (foundations, organizations, local)
    const buttonClickHandler = (e) => {
        setType(+e.target.value);
    };

    const text1 = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, " +
        "z którymi współpracujemy. Możesz sprawdzić czym się zajmują, " +
        "komu pomagają i czego potrzebują.";

    const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation.";

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
            {type === 1 && <FoundationType text={text1} list={foundationsList}/>}
            {type === 2 && <FoundationType text={text2} list={organizationsList}/>}
            {type === 3 && <FoundationType text={text2} list={localList}/>}
        </section>
    )
};

export default Foundations;