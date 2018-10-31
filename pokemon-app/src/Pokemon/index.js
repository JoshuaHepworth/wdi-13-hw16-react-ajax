import React, { Component } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

class Pokemon extends Component {

    render(){
    	console.log(this.props.pokemon)
    	const pokemonList = this.props.pokemon.map((pokes, i) => {

    		return 	(
    			
    			<Grid container columns={1} textAlign='center' verticalAlign='middle' style={{height: '100%'}}>
    			<Grid.Column style={{maxWidth: 450}} >
    			<Segment color="blue">
    			<li key={i}> Name: {pokes.name}<br/>
    			<img src={pokes.sprites.front_default}/><br/>
    			Height: {pokes.height}<br/>
    			Weight: {pokes.weight}<br/><br/>

    		 </li>
    		 </Segment>
    		 </Grid.Column>
    		 </Grid>
    		 )
    	
    	});

        return(
        	<div>
             <h1 verticalAlign='middle'textAlign="center">Pokemon</h1>
             <ul>{pokemonList}</ul>
            </div>
        )
    }
}
export default Pokemon;
