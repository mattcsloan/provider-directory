import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DirectoryActions extends Component {
  render() {
    return (
      <div className="directory-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search Providers" />
          <input type="submit" value="Search" />
        </div>
        <div className="filter-selector">
          <label>Filter by:</label>
          <select>
            <option value="" selected disabled>Specialty...</option>
            <option value="sample">Sample Specialty</option>
          </select>
        </div>
      </div>
    )
  }
};

export default DirectoryActions;