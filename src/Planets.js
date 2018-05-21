import React, { Component } from "react";


class Planets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: []
    };
  }

  componentDidMount() {
      fetch("https://swapi.co/api/planets/?format=json")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(swapi => (
          {
            name: `${swapi.name}`,
            diameter: `${swapi.diameter}`,
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const { error, isLoaded, items } = this.state;
        return (
          <div className="kotak">
            <h2>Planets</h2>
            {
              items.length > 0 ? items.map(item => {
              const {name, diameter} = item;
               return (
               <div key={name} className="CardSwapi">
                Name: {name} <br /> Diameter: {diameter}
              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Planets;
