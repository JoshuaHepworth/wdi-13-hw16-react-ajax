import React, { Component } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	handleInput = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleLogin(this.state.username, true);
	}
    render(){
        return(
        	<Form onSubmit={this.handleSubmit}>
	        	 <Form.Input fluid icon="user" type="text" name="username"onChange={this.handleInput}value={this.state.username}placeholder="username"/>
	        	 <Form.Input fluid icon="lock"type="text" name="password"onChange={this.handleInput}value={this.state.password}placeholder="password"/>
	        	 <Button color="blue" type="submit">Login</Button>
        	</Form>
        )
    }
}
export default Login;

