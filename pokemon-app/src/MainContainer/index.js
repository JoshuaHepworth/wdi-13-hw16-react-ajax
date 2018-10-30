import React, { Component } from 'react';


class MainContainer extends Component {
	constructor(){
		super();
		this.state = {
			pokemon: []
		}
	}
	getPokemon = async () => {
		try {
			const pokemon = await fetch('')
			const pokemonJson = await pokemon.json();
			return pokemonJson
		} catch (err) {
			return err
		}
	}
    render(){
        return(
            <h1>Pokemon</h1>
        )
    }
}
export default MainContainer;
