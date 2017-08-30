import React, { Component } from 'react';

import DirectoryActions from '../DirectoryActions';
import ProviderDirectory from '../ProviderDirectory';
import Button from '../Button';

class MainContent extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="product-title">Provider Directory <span className="info-pill">2.0</span></h1>
        <DirectoryActions />
        <ProviderDirectory />
        <Button label="Add New Provider" />
      </div>
    )
  }
};

export default MainContent;