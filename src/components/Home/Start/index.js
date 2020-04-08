import React from "react";
import {Link} from "react-router-dom";

const Start = ({id}) => {
    return (
        <div id={(id)}>
            <div>
                <h1>Zacznij pomagać!</h1>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
            </div>
            <div>
                <Link className="loginLink" to={'/logowanie'}><button>oddaj<br/>rzeczy</button></Link>
                <Link className="loginLink" to={'/logowanie'}><button>zorganizuj zbiórkę</button></Link>
            </div>
        </div>
    )
};

export default Start;