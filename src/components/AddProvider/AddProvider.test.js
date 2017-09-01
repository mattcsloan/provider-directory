import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../../App';
import AddProvider from './AddProvider';

it('renders without crashing', () => {
  shallow(<AddProvider />);
});

it('sets state properly', () => {  
  const app = mount(<App />);
  const addProvider = shallow(<AddProvider />);
  
  app.setState({ showProviderForm: false });
  expect(app.find('.add-provider').length).toBe(0);
});
