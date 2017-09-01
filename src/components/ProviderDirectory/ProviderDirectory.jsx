import React from 'react';
import sortBy from 'sort-by';

function ProviderDirectory(props) {
  const sortOrder = props.sortBy.startsWith('-') ? "sort-desc" : "sort-asc";
  const sortedProviders = [].concat(props.providers).sort(sortBy(props.sortBy));
  return (
    <div className="provider-directory">
      <table cellSpacing="0" cellPadding="0">
          <thead>
          <tr>
            <th></th>
            <th
              className={
                props.sortBy === 'last_name' || props.sortBy === '-last_name' ? `sort-option ${sortOrder}` : 'sort-option'
              }
              onClick={() => props.onUpdateSort('last_name')}
            >
              Provider
            </th>
            <th
              className={
                props.sortBy === 'specialty' || props.sortBy === '-specialty' ? `sort-option ${sortOrder}` : 'sort-option'
              }
              onClick={() => props.onUpdateSort('specialty')}
            >
              Specialty
            </th>
            <th
              className={
                props.sortBy === 'practice_name' || props.sortBy === '-practice_name' ? `sort-option ${sortOrder}` : 'sort-option'
              }
              onClick={() => props.onUpdateSort('practice_name')}
            >
              Practice Name
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProviders && sortedProviders.map(provider => (
            <tr key={provider.email_address}>
              <td>
                <div className="provider-actions">
                  <span className="btn btn-subtle">&hellip;</span>
                  <div className="provider-actions-menu">
                    <a href={`mailto: ${provider.email_address}`}>Email {provider.first_name}</a>
                    <a onClick={() => props.onDeleteProvider(provider)} className="delete-provider">Delete Provider</a>
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
          {!sortedProviders.length &&
            <tr>
              <td colSpan="4" className="empty-state">No results found. Try resetting the search and filters or add a new provider.</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
};

export default ProviderDirectory;