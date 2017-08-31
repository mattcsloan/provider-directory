import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

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
      providers: state.providers.filter((p) =>
        p.email_address !== provider.email_address)
    }));
  };

  addProvider = (provider) => {
    this.setState((state) => ({
      providers: [provider, ...state.providers],
      specialties: !state.specialties.includes(provider.specialty) ?
        [...state.specialties, provider.specialty] :
        state.specialties
    }));
    this.props.onToggleProviderForm();
  }

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
    const {
      showProviderForm,
      onToggleProviderForm
    } = this.props;

    const {
      query,
      providers,
      filter,
      sortBy,
      specialties
    } = this.state;

    let visibleProviders;
    if(query) {
      // escape special characters from query (ignore case)
      const match = new RegExp(escapeRegExp(query), 'i');
      visibleProviders = providers.filter(provider => {
        const allFields = `${provider.first_name} ${provider.last_name} ${provider.practice_name} ${provider.specialty} ${provider.email_address}`;
        return match.test(allFields);
      });
    } else {
      visibleProviders = providers;
    }

    if(filter) {
      visibleProviders = visibleProviders.filter(provider => {
        const filterMatch = new RegExp(escapeRegExp(filter), 'i');
        return filterMatch.test(provider.specialty);
      })
    }

    return (
      <div className="wrapper">
        {showProviderForm &&
          <AddProvider
            onToggleProviderForm={onToggleProviderForm}
            onAddProvider={this.addProvider}
          />
        }
        <h1 className="product-title">Provider Directory <span className="info-pill">2.0</span></h1>
        <DirectoryActions
          onUpdateQuery={this.updateQuery}
          query={query}
          onUpdateFilter={this.updateFilter}
          specialties={specialties}
      />
        <ProviderDirectory
          providers={visibleProviders}
          onDeleteProvider={this.removeProvider}
          onUpdateSort={this.updateSort}
          sortBy={sortBy}
        />
      </div>
    )
  }
};

export default MainContent;