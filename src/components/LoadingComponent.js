'use strict';

import React from 'react';
import Loading from 'react-loading'

require('styles//Loading.css');

class LoadingComponent extends React.Component {
  render() {
    return (
      <div className="loading-component">
        <div className={ this.props.display ? "display-none" : null }>
          <Loading type='bubbles' color='#e3e3e3' />
        </div>
      </div>
    );
  }
}

LoadingComponent.displayName = 'LoadingComponent';

// Uncomment properties you need
// LoadingComponent.propTypes = {};
// LoadingComponent.defaultProps = {};

export default LoadingComponent;
