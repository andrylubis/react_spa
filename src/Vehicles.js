import React, { Component } from "react";


class Vehicles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: []
    };
  }

  componentDidMount() {
      fetch("https://swapi.co/api/vehicles/?format=json")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(swapi => (
          {
            name: `${swapi.name}`,
            model: `${swapi.model}`,
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
            <h2>Vehicles</h2>
            {
              items.length > 0 ? items.map(item => {
              const {name, model} = item;
               return (
               <div key={name} className="CardSwapi">
                Name: {name} <br /> Model: {model}
              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Vehicles;
