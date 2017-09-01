import React from 'react';
import { shallow } from 'enzyme';
import FormErrors from './FormErrors';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const formErrors = {
    email_address: '',
    first_name: '',
    last_name: ''
  };

  shallow(
    <FormErrors formErrors={formErrors} />
  );
});