import React from 'react';
import App from './App';
import { Switch, Route } from 'react-router-dom'
import PlanetDetails from './components/PlanetDetails/PlanetDetails';
import UserLogin from './components/Login/UserLogin';

const Home = () => {
    return (
        <Switch>
            <Route exact path="/planet" component={App} />
            <Route path="/planetdetails/:name" component={PlanetDetails} />
            <Route path="/" component={UserLogin} />
        </Switch>
    );
}

export default Home;