require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import CountryInfoComponent from './CountryInfoComponent'
import CountrySelectComponent from './CountrySelectComponent'
import LoadingComponent from './LoadingComponent'



class AppComponent extends React.Component {
   

  render() {
    console.log('render')
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}> 
        <div className="main-container">
          <LoadingComponent />
          <CountrySelectComponent />
          <CountryInfoComponent />  
        </div>
      </MuiThemeProvider>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
