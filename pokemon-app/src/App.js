import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  handleLogin = (username, logged) => {
    this.setState({
      username: username,
      logged: logged
    })
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
