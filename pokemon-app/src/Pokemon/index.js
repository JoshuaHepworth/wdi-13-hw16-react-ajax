import React, { Component } from 'react';


class Pokemon extends Component {

    render(){
    	console.log(this.props.pokemon)
    	const pokemonList = this.props.pokemon.map((pokes, i) => {

    		return 	<li key={i}> Name: {pokes.name}<br/>
    							<img src={pokes.sprites.front_default}/><br/>
    							<img src={pokes.sprites.back_default}/><br/>
    							Height: {pokes.height}<br/>
    							Weight: {pokes.weight}<br/><br/>
    		 </li>

    	
    	});

        return(
        	<div>
            <h1>Pokemon</h1>
            <ul>{pokemonList}</ul>
            </div>
        )
    }
}
export default Pokemon;
