import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends Component {
  state = {
    showProviderForm: false,
  };

  toggleProviderForm = () => {
    this.setState((state) => ({
      showProviderForm: !state.showProviderForm
    }))
  };

  render() {
    return (
      <div className="App">
        <Header onToggleProviderForm={this.toggleProviderForm} />
        <MainContent
          onToggleProviderForm={this.toggleProviderForm}
          showProviderForm={this.state.showProviderForm}
        />
      </div>
    );
  }
}

export default App;
