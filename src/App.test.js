import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import MainContent from './components/MainContent';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should show provider form via state', () => {  
  const app = mount(<App />);
  
  app.setState({ showProviderForm: true });
  expect(app.find('.add-provider').length).toBe(1);
});

it('should hide provider form via state', () => {  
  const app = mount(<App />);
  
  app.setState({ showProviderForm: false });
  expect(app.find('.add-provider').length).toBe(0);
});
