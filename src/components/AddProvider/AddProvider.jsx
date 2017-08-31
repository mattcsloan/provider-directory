import React, { Component } from 'react';
import serializeForm from 'form-serialize';

import FormErrors from '../FormErrors';

class AddProvider extends Component {
  state = {
    first_name: '',
    last_name: '',
    email_address: '',
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
    formValid: false,
    formErrors: {
      first_name: '',
      last_name: '',
      email_address: ''
    },
    emailExists: false
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value,
        emailExists: false
      },
      () => {this.validateField(name, value)}
    );
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'email_address':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email_address = emailValid ? '' : ' is invalid';
        break;
      case 'first_name':
        firstNameValid = value.length >= 1;
        fieldValidationErrors.first_name = firstNameValid ? '': ' is required';
        break;
      case 'last_name':
        lastNameValid = value.length >= 1;
        fieldValidationErrors.last_name = lastNameValid ? '': ' is required';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      firstNameValid: firstNameValid,
      lastNameValid: lastNameValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.firstNameValid && this.state.lastNameValid});
  }

  errorClass(error) {
   return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formValues = serializeForm(e.target, { hash: true });
    Object.keys(formValues).map((e) => {
      if(e === 'email_address') {
        return formValues[e] = formValues[e].toLowerCase();
      } else {
        return formValues[e] = formValues[e].charAt(0).toUpperCase() + formValues[e].slice(1);
      }
    });
    const duplicateEmails = this.props.providers.filter(provider => provider.email_address === formValues['email_address']);
    if(duplicateEmails.length) {
      this.setState({ emailExists: true });
    } else {
      this.setState({ emailExists: false });
      this.props.onAddProvider && this.props.onAddProvider(formValues);
    }
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
            <input
              name="first_name"
              type="text"
              placeholder="First Name *"
              value={this.state.first_name}
              onChange={(event) => this.handleUserInput(event)}
              className={this.errorClass(this.state.formErrors.first_name)}
            />
            <input
              name="last_name"
              type="text"
              placeholder="Last Name *"
              value={this.state.last_name}
              onChange={(event) => this.handleUserInput(event)}
              className={this.errorClass(this.state.formErrors.last_name)}
            />
            <input
              name="email_address"
              type="text"
              placeholder="Email Address *"
              value={this.state.email_address}
              onChange={(event) => this.handleUserInput(event)}
              className={this.errorClass(this.state.formErrors.email_address)}
            />
            <input name="specialty" type="text" placeholder="Specialty" />
            <input name="practice_name" type="text" placeholder="Practice Name" />
            <input
              className="btn"
              type="submit"
              value="Create"
              disabled={!this.state.formValid}
            />
          </form>
          <FormErrors formErrors={this.state.formErrors} />
          {this.state.emailExists &&
            <div className="notification error">
              A provider already exists with this email address. Please update and submit again.
            </div>
          }
        </div>
      </div>
    )
  }
};

export default AddProvider;