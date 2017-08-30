import React, { Component } from 'react';

import mockProviders from '../../data/mockProviders.json';

class ProviderDirectory extends Component {
  render() {
    return (
      <div className="provider-directory">
        <table cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
              <th></th>
              <th>Provider</th>
              <th>Specialty</th>
              <th>Practice Name</th>
            </tr>
          </thead>
          <tbody>
            {mockProviders.map(provider => (
              <tr key={provider.email_address}>
                <td>
                  <div className="provider-actions">
                    <span className="btn btn-subtle">&hellip;</span>
                    <div className="provider-actions-menu">
                      <a href="#">Email {provider.first_name}</a>
                      <a href="#">Update Provider</a>
                      <a href="#" className="delete-provider">Delete Provider</a>
                    </div>
                  </div>
                </td>
                <td className="provider-info">
                  <strong>{provider.last_name}, {provider.first_name}</strong>
                  <span>{provider.email_address}</span>
                </td>
                <td>{provider.specialty}</td>
                <td>{provider.practice_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
};

export default ProviderDirectory;