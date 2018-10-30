import React, { Component } from 'react';


class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
    render(){
        return(
        	<form onSubmit={this.handleSubmit}>
            
        )
    }
}
export default Login;
