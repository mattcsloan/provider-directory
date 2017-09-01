import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

it('renders without crashing', () => {
  shallow(
    <MainContent />
  );
});