import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DirectoryActions from '../DirectoryActions';

class MainContent extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="product-title">Provider Directory <span className="info-pill">2.0</span></h1>
        <DirectoryActions />
      </div>
    )
  }
};

export default MainContent;