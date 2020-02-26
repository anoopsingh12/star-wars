import React, { Component } from 'react'
import 'whatwg-fetch';

export const Context = React.createContext({})

export default class CustomProvider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            selectedPlanet: {},
        }
    }

    selectPlanet = planet => {
        this.setState({
            selectedPlanet: planet
        })
    }

    getPlanet = (url) => {
        fetch(url)
            .then( response => response.json() )
            .then( result => this.setState({ selectedPlanet: result }, ( ) => {
                console.log("character: ", this.state.selectedPlanet)
                }))
    }

    getSearch = (name) => {
        if(name !== ""){
            fetch(`https://swapi.co/api/planets/?search=${name}`)
            .then( response => response.json() )
            .then( json => this.setState({ data: json.results }, ( ) => {
                console.log("Result: ", this.state.data)
                }))

        }
    }

    render() {
        const value = {
            state: { ...this.state },
            action: {
              getSearch: this.getSearch,
              selectedPlanet: this.selectedPlanet,
              getPlanet: this.getPlanet,
              selectPlanet: this.selectPlanet,
            }
          };

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )

    }
}
