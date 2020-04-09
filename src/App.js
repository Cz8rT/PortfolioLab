import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import {AuthProvider} from "./config/Auth";
import PrivateRoute from "./config/PrivateRoute";
import Giveaway from "./components/Giveaway";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className={"container"}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/logowanie' component={Login}/>
                        <Route path='/rejestracja' component={Register}/>
                        <Route path='/wylogowano' component={Logout}/>
                        <PrivateRoute path='/oddaj-rzeczy' component={Giveaway}/>
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
