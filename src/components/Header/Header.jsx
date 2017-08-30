import React from 'react';

import logo from '../../img/logo.png';

import Button from '../Button';

function Header(props) {
  return (
    <div className="header">
      <div className="wrapper">
        <img src={logo} alt="Updox" width="123" />
        <Button onToggleProviderForm={props.onToggleProviderForm} label="Add New Provider" />
      </div>
    </div>
  )
};

export default Header;