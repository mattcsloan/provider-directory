import React, { Component } from 'react';

class AddProvider extends Component {
  render() {
    return (
      <div>
        <h1 className="product-title">Add New Provider</h1>
        <a
          className="close-form"
          onClick={this.props.onToggleProviderForm}
        >
          Close
        </a>
        <div className="mod add-provider">
          <form className="add-provider-form" name="add-provider">
            <input type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name *" />
            <input type="text" placeholder="Email Address *" />
            <input type="text" placeholder="Specialty" />
            <input type="text" placeholder="Practice Name" />
            <input className="btn" type="submit" value="Create" />
          </form>
        </div>
      </div>
    )
  }
};

export default AddProvider;