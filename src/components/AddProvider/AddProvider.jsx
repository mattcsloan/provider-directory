import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class AddProvider extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formValues = serializeForm(e.target, { hash: true });
    Object.keys(formValues).map((e) => {
      formValues[e] = formValues[e].charAt(0).toUpperCase() + formValues[e].slice(1)
    });
    this.props.onAddProvider && this.props.onAddProvider(formValues);
  }

  render() {
    const {
      onToggleProviderForm
    } = this.props;
    return (
      <div>
        <h1 className="product-title">Add New Provider</h1>
        <a
          className="close-form"
          onClick={onToggleProviderForm}
        >
          Close
        </a>
        <div className="mod add-provider">
          <form
            className="add-provider-form"
            name="add-provider"
            onSubmit={this.handleSubmit}
          >
            <input name="first_name" type="text" placeholder="First Name *" />
            <input name="last_name" type="text" placeholder="Last Name *" />
            <input name="email_address" type="text" placeholder="Email Address *" />
            <input name="specialty" type="text" placeholder="Specialty" />
            <input name="practice_name" type="text" placeholder="Practice Name" />
            <input className="btn" type="submit" value="Create" />
          </form>
        </div>
      </div>
    )
  }
};

export default AddProvider;