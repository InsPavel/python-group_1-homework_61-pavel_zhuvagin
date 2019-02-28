import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./container/Home/Home";
import AboutUs from "./container/AboutUs/AboutUs";
import Contacts from "./container/Contacts/Contacts";


class App extends Component {
    render() {
        return (
            <div className='background'>
                <div className='container'>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/about" component={AboutUs}/>
                            <Route path="/" exact component={Home}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
