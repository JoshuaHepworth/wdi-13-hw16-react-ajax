import React, { Component } from 'react';
import Pokemon from '../Pokemon';

class MainContainer extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			pokemon: []
		};
	}
	getPokemon = async (index) => {
		try {
			const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' +  index + '/');
			const pokemonJson = await pokemon.json();
			return pokemonJson;
		} catch (err) {
			return err
		}
	}
	componentDidMount(){
		for (let i = 1 ; i < 50; i++) {
			this.getPokemon(i).then(async (pokemon) => {
				try {
					await this.state.pokemon.push(pokemon);
					this.setState({
						pokemon: this.state.pokemon
					})
					console.log(`this.state: `, this.state.pokemon[0].name);
				} catch (err) {
				}
			})
		}

		}
    render(){
    	console.log(this.state.pokemon)
        return(
        	<div>
             <Pokemon pokemon={this.state.pokemon} />
            </div>
        )
    }
}
export default MainContainer;
