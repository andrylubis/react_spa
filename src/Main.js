import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import People from "./People";
import Planets from "./Planets";
import Vehicles from "./Vehicles";
import About from "./About";



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="titleH1">SWAPI</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/people">People</NavLink></li>
            <li><NavLink to="/planets">Planets</NavLink></li>
            <li><NavLink to="/vehicles">Vehicles</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/people" component={People}/>
            <Route exact path="/planets" component={Planets}/>
            <Route exact path="/vehicles" component={Vehicles}/>
            <Route exact path="/about" component={About}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;
