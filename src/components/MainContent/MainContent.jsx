import React from 'react';

import AddProvider from '../AddProvider';
import DirectoryActions from '../DirectoryActions';
import ProviderDirectory from '../ProviderDirectory';

function MainContent(props) {
  return (
    <div className="wrapper">
      {props.showProviderForm &&
        <AddProvider
          onToggleProviderForm={props.onToggleProviderForm}
        />
      }
      <h1 className="product-title">Provider Directory <span className="info-pill">2.0</span></h1>
      <DirectoryActions />
      <ProviderDirectory />
    </div>
  )
};

export default MainContent;