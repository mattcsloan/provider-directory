import React, { Component } from 'react';

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
            <tr>
              <td>
                <div className="provider-actions">
                  <span className="btn btn-subtle">&hellip;</span>
                  <div className="provider-actions-menu">
                    <a href="#">Email Mike</a>
                    <a href="#">Update Provider</a>
                    <a href="#" className="delete-provider">Delete Provider</a>
                  </div>
                </div>
              </td>
              <td className="provider-info">
                <strong>Harris, Mike</strong>
                <span>mharris@updox.com</span>
              </td>
              <td>Pediatrics</td>
              <td>Harris Pediatrics</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

export default ProviderDirectory;