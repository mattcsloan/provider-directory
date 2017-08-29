import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="Updox" />
        </div>
      </div>
    );
  }
}

export default App;
