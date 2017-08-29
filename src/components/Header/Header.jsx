import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../../img/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="wrapper">
          <img src={logo} alt="Updox" width="123" />
          <a className="btn" href="#">Add New Provider</a>
        </div>
      </div>
    )
  }
};

export default Header;