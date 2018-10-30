import React, { Component } from 'react';


class Pokemon extends Component {

    render(){
    	const pokemonList = this.props.pokemon.map((pokes, i) => {
    		return (
    			<li key={i}>Name: {pokes.name}<br/>
    			</li>

    		)	
    		console.log(pokemonList)	
    	});
        return(
        	<div>
            <h1>Pokemon</h1>
            <ul>{pokemonList}</ul>}
            </div>
        )
    }
}
export default Pokemon;
