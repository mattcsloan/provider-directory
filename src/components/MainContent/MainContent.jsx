import React, { Component } from 'react';

import AddProvider from '../AddProvider';
import DirectoryActions from '../DirectoryActions';
import ProviderDirectory from '../ProviderDirectory';

import mockProviders from '../../data/mockProviders.json';

class MainContent extends Component {
  state = {
    providers: mockProviders
  }

  removeProvider = (provider) => {
    this.setState((state) => ({
      providers: state.providers.filter((p) => p.email_address !== provider.email_address)
    }))
  };

  render() {
    return (
      <div className="wrapper">
        {this.props.showProviderForm &&
          <AddProvider
            onToggleProviderForm={this.props.onToggleProviderForm}
          />
        }
        <h1 className="product-title">Provider Directory <span className="info-pill">2.0</span></h1>
        <DirectoryActions />
        <ProviderDirectory providers={this.state.providers} onDeleteProvider={this.removeProvider} />
      </div>
    )
  }
};

export default MainContent;