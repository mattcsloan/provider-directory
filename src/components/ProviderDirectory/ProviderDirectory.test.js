import React from 'react';
import { shallow } from 'enzyme';
import ProviderDirectory from './ProviderDirectory';

it('renders without crashing', () => {
  const providers = [
    {
      first_name: 'Sample',
      last_name: 'Tester',
      email_address: 'sample@tester.com',
    }
  ];
  shallow(
    <ProviderDirectory
      sortBy=""
      providers={providers}
      />
  );
});