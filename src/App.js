import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";

function App() {
    return (
        <Router>
            <div className={"container"}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/logowanie' component={Login}/>
                    <Route path='/rejestracja' component={Register}/>
                    <Route path='/wylogowano' component={Logout}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
