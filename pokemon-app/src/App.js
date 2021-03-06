import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './Login'
import MainContainer from './MainContainer'
// import Pokemon from './Pokemon'

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
      // console.log()
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
