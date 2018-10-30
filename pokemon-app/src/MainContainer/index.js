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
			const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/')
			const pokemonJson = await pokemon.json();
			return pokemonJson
		} catch (err) {
			return err
		}
	}
	componentDidMount(){
		this.getPokemon().then((pokes) => {
			console.log(pokes, 'here are the pokemons')
		})
	}
    render(){
        return(
            <h1>Pokemon</h1>
        )
    }
}
export default MainContainer;
