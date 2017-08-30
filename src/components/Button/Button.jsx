import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <a className="btn" href="#">{this.props.label}</a>
    )
  }
};

export default Button;