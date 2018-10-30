import React, { Component } from 'react';


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
        	<form onSubmit={this.handleSubmit}>
	        	 <input type="text" name="username"value={this.state.username}placeholder="username"/>
	        	 <input type="text" name="password"value={this.state.password}placeholder="password"/>
	        	 <input type="submit" value="Login"/>
        	</form>
        )
    }
}
export default Login;

