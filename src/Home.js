import React, { Component } from "react";
import { Button } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div>
        <h2>Starwars Attributes</h2>
        <div className="kotak">
            <div className="CardSwapi">
              People
            </div>
            <div className="CardSwapi">
              Planets
            </div>
            <div className="CardSwapi">
              Vehichles
            </div>
        </div>

      </div>

    );
  }
}

export default Home;
