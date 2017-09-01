import React from 'react';
import { Typeahead } from 'react-typeahead';

function DirectoryActions(props) {
  const sortedSpecialties = [].concat(props.specialties).sort((a, b) => a.localeCompare(b));
  return (
    <div className="directory-actions">
      <div className="search-bar">
        <Typeahead
          value={props.query}
          placeholder="Search Providers"
          options={props.providers}
          filterOption="last_name"
          displayOption="last_name"
          maxVisible={5}
          onChange={(event) => props.onUpdateQuery(event.target.value)}
          onOptionSelected={(option) => props.onUpdateQuery(option.last_name)}
          />
        <input type="submit" value="Search" />
      </div>
      <div className="filter-selector">
        <label>Filter by:</label>
        <select
          className="filter-selector-dropdown"
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