import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class About extends Component {
  render() {
    return (
      <div>
        <h2>About SWAPI</h2>
        <p>Welcome to the swapi, the Star Wars API! This documentation should help you familiarise yourself with
        the resources available and how to consume them with HTTP requests. If you're after a native helper library then
        I suggest you read more <a href="https://swapi.co">documentation.</a>
        </p>
      </div>
    );
  }
}

export default About;
