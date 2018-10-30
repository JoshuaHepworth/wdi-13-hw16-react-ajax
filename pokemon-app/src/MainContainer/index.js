import React, { Component } from 'react';
import Pokemon from '../Pokemon'

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
			const pokemonResults = pokemonJson.results
			return pokemonResults
		} catch (err) {
			return err
		}
	}
	componentDidMount(){
		this.getPokemon().then((pokes) => {
			console.log(pokes, 'here are the pokemons')

			this.setState({
				pokemon: pokes
			})
		})
	}
    render(){
    	// console.log(this.state)
        return(
        	<div>
             <Pokemon pokemon={this.state.pokemon}/>
            </div>
        )
    }
}
export default MainContainer;
