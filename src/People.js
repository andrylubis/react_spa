import React, { Component } from "react";


class People extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: []
    };
  }

  componentDidMount() {
      fetch("https://swapi.co/api/people/?format=json")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(swapi => (
          {
            name: `${swapi.name}`,
            gender: `${swapi.gender}`,
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
            <h2>People</h2>
            {
              items.length > 0 ? items.map(item => {
              const {name, gender} = item;
               return (
               <div key={name} className="CardSwapi">
                Name: {name} <br /> Gender: {gender}
              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default People;
