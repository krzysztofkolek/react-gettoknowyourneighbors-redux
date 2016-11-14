'use strict';

require('styles//CountrySelect.css');

import React from 'react';
import { connect } from "react-redux"

import { fetchCountrys, setCountry } from '../actions/CountrySelectAction'

import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

@connect((store) => {
  return { 
    countrySelect: store.countrySelect
  };
})
class CountrySelectComponent extends React.Component {
  constructor(props) {
    super(props);
  } 
   componentWillMount() {
    this.props.dispatch(fetchCountrys())
  }

  handleUpdateInput = (value) => {
    this.setState({
      autoCompleateValue: value
    });
  };

  handleNewRequest = (chosenRequest, index) => {
    this.setState({
      autoCompleateValue: chosenRequest
    });
  }
  
  buttonClicked() {
    this.props.dispatch(setCountry(this.state.autoCompleateValue))
  }

  render() {
    const styles = {
      button: {
        margin: 12,
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
    };

    return (
        <div className="countryselect-component">
          <AutoComplete
            hintText="Type country name..."
            dataSource={this.props.countrySelect.countrys.map(function(item) { return item.Name })} 
             onUpdateInput={this.handleUpdateInput}
             onNewRequest={this.handleNewRequest}
          /> 
          <RaisedButton label="Search" primary={true} style={styles.button} >
            <input type="button" onClick={this.buttonClicked.bind(this)} style={styles.exampleImageInput} />
          </RaisedButton>
        </div>
    );
  }
}

CountrySelectComponent.displayName = 'CountrySelectComponent';

// Uncomment properties you need
// CountrySelectComponent.propTypes = {};
// CountrySelectComponent.defaultProps = {};

export default CountrySelectComponent;
