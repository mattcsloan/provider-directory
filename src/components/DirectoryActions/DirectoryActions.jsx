import React from 'react';

function DirectoryActions(props) {
  const sortedSpecialties = [].concat(props.specialties).sort((a, b) => a.localeCompare(b));
  return (
    <div className="directory-actions">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Providers"
          value={props.query}
          onChange={(event) => props.onUpdateQuery(event.target.value)}
        />
        <input type="submit" value="Search" />
      </div>
      <div className="filter-selector">
        <label>Filter by:</label>
        <select
          onChange={(event) => props.onUpdateFilter(event.target.value)}
          defaultValue=""
        >
          <option value="">All Specialties</option>
          {sortedSpecialties.map(specialty => {
              return <option key={specialty} value={specialty}>{specialty}</option>
            })
          }
        </select>
      </div>
    </div>
  )
};

export default DirectoryActions;