import React from 'react';
import { shallow } from 'enzyme';
import DirectoryActions from './DirectoryActions';

const providers = [
  {
    first_name: 'Sample',
    last_name: 'Tester',
    email_address: 'sample@tester.com',
  }
];
const specialties = ['Pediatrics', 'Orthopedics', 'General Medicine'];

it('renders without crashing', () => {
  shallow(
    <DirectoryActions
      specialties={specialties}
      providers={providers}
      />
  );
});

it('populates specialties in dropdown', () => {
  const label = "testing"
  const directory = shallow(
    <DirectoryActions
      specialties={specialties}
      providers={providers}
      />
  );

  expect(directory.find('.filter-selector-dropdown').children('option').length).toBe(4);
});
