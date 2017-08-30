import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import AddProvider from '../AddProvider';
import DirectoryActions from '../DirectoryActions';
import ProviderDirectory from '../ProviderDirectory';

import mockProviders from '../../data/mockProviders.json';

class MainContent extends Component {
  state = {
    providers: mockProviders,
    specialties: [],
    query: '',
    filter: '',
    sortBy: 'last_name'
  }

  removeProvider = (provider) => {
    this.setState((state) => ({
      providers: state.providers.filter((p) => p.email_address !== provider.email_address)
    }));
  };

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }

  updateFilter = (filter) => {
    this.setState({ filter });
  }

  updateSort = (item) => {
    const sorter = item === this.state.sortBy ? `-${item}` : item;
    this.setState({ sortBy: sorter });
  }

  componentDidMount() {
    // compile list of specialties from provider list
    // to display in filter dropdown
    this.state.providers
      .map(provider => provider.specialty)
      .filter((elem, index, array) => {
        if(array.indexOf(elem) === index) {
          this.setState((state) => ({
            specialties: [...state.specialties, elem]
          }));
        }
        return false;
      });
  }

  render() {
    let visibleProviders;
    if(this.state.query) {
      // escape special characters from query (ignore case)
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      visibleProviders = this.state.providers.filter(provider => {
        const allFields = `${provider.first_name} ${provider.last_name} ${provider.practice_name} ${provider.specialty} ${provider.email_address}`;
        return match.test(allFields);
      });
    } else {
      visibleProviders = this.state.providers;
    }

    if(this.state.filter) {
      visibleProviders = visibleProviders.filter(provider => {
        const filterMatch = new RegExp(escapeRegExp(this.state.filter), 'i');
        return filterMatch.test(provider.specialty);
      })
    }

    visibleProviders.sort(sortBy(this.state.sortBy));

    return (
      <div className="wrapper">
        {this.props.showProviderForm &&
          <AddProvider
            onToggleProviderForm={this.props.onToggleProviderForm}
          />
        }
        <h1 className="product-title">Provider Directory <span className="info-pill">2.0</span></h1>
        <DirectoryActions
          onUpdateQuery={this.updateQuery}
          query={this.state.query}
          onUpdateFilter={this.updateFilter}
          specialties={this.state.specialties}
      />
        <ProviderDirectory
          providers={visibleProviders}
          onDeleteProvider={this.removeProvider}
          onUpdateSort={this.updateSort}
          sortBy={this.state.sortBy}
        />
      </div>
    )
  }
};

export default MainContent;