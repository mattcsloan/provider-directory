import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import ProviderDirectory from './components/ProviderDirectory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProviderDirectory />
      </div>
    );
  }
}

export default App;
