import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders without crashing', () => {
  shallow(<Button />);
});

it('shows label passed as button text', () => {
  const label = "testing"
  const btn = shallow(
    <Button label={label} />
  );

  expect(btn.contains(label)).toEqual(true);
});