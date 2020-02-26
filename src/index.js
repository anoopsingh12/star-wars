import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Home from './Home';
import { BrowserRouter, Switch } from 'react-router-dom'
import CustomProvider from './context/Context';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <CustomProvider>
               <Home />
            </CustomProvider>
        </Switch>
    </ BrowserRouter>
, document.getElementById('root'));
