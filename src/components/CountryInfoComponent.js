'use strict';

require('styles//CountryInfo.css');

import React from 'react';
import { connect } from "react-redux"

import MapComponent from './MapComponent'
import { getCountryCode } from '../actions/CountrySelectAction'
import { getCountryInformation } from '../actions/CountriesAction'

import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

@connect((store) => {
  return { 
    country: store.country,
    countrySelect: store.countrySelect
  };
})
class CountryInfoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: false,
      fixedFooter: false,
      stripedRows: true,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false

    };
  }

  getSibleValueTble(dataSource, title) {
    return <Table
      height={this.state.height}
      fixedHeader={this.state.fixedHeader}
      fixedFooter={this.state.fixedFooter}
      selectable={this.state.selectable}
      multiSelectable={this.state.multiSelectable}>
      <TableHeader
        displaySelectAll={this.state.showCheckboxes}
        adjustForCheckbox={this.state.showCheckboxes}
        enableSelectAll={this.state.enableSelectAll}>
        <TableRow>
          <TableHeaderColumn colSpan="1" tooltip={title} style={{ textAlign: 'center' }}>
            {title}
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={this.state.showCheckboxes}
        deselectOnClickaway={this.state.deselectOnClickaway}
        showRowHover={this.state.showRowHover}
        stripedRows={this.state.stripedRows}>
        {dataSource.map((row, index) => (
          <TableRow key={index}>
            <TableRowColumn key={index}>{row}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
        <TableRow>
        </TableRow>
      </TableFooter>
    </Table>
  }

  getCountryInfo(countryCode) {
    //if(this.props)
    this.props.dispatch(getCountryInformation(countryCode))
  }

  render() {
    const styles = {
      propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
      },
      propToggleHeader: {
        margin: '20px auto 10px',
      },
    };

    const tableData = [
      { name: 'name		', value: this.props.country.name },
      { name: 'code		', value: this.props.country.code },
      { name: 'capital		', value: this.props.country.capital },
      { name: 'region		', value: this.props.country.region },
      { name: 'subRegion	', value: this.props.country.subRegion },
      { name: 'population	', value: this.props.country.population },
      { name: 'area		', value: this.props.country.area },
      { name: 'nativeName	', value: this.props.country.nativeName }
    ];

    const languages = this.props.country.languages;
    const currencies = this.props.country.currencies;
    const timezones = this.props.country.timezones;
    const translations = this.props.country.translations;

    let countryCode = getCountryCode(this.props.countrySelect.selectedCountryValue);
    if(countryCode != undefined) {
      let countryFlagUrl = `http://flagpedia.net/data/flags/normal/${countryCode.toLowerCase()}.png`;
      if(countryCode != this.props.country.code) {
        this.getCountryInfo(countryCode);
      }

      console.log(this.props.country);
      console.log(this.props.countrySelect);
      return (
        <div className="table">
          <div className="table-row table-cell-flag">
            <img src={countryFlagUrl} />
          </div>
          <div className="table-row">
            <div className="country-information-table table-width table-cell">
              <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}>
                <TableHeader
                  displaySelectAll={this.state.showCheckboxes}
                  adjustForCheckbox={this.state.showCheckboxes}
                  enableSelectAll={this.state.enableSelectAll}>
                  <TableRow>
                    <TableHeaderColumn colSpan="2" tooltip="Country details" style={{ textAlign: 'center' }}>
                      Country details
                </TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  displayRowCheckbox={this.state.showCheckboxes}
                  deselectOnClickaway={this.state.deselectOnClickaway}
                  showRowHover={this.state.showRowHover}
                  stripedRows={this.state.stripedRows}>
                  {tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableRowColumn key={Date.now()}>{row.name}</TableRowColumn>
                      <TableRowColumn key={Date.now()}>{row.value}</TableRowColumn>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
                  <TableRow>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
            <div className="table-cell">
              <MapComponent />
            </div>
          </div>
          <div className="table-row">
            <div className="country-languages-table table-width table-cell">
              {this.getSibleValueTble(languages, 'languages')}
            </div>
            <div className="country-currencies-table table-width table-cell">
              {this.getSibleValueTble(currencies, 'currencies')}
            </div>
          </div>

          <div className="table-row">
            <div className="country-timezones-table table-width table-cell">
              {this.getSibleValueTble(timezones, 'timezones')}
            </div>
            <div className="country-translations-table table-width table-cell">
              {this.getSibleValueTble(translations, 'translations')}
            </div>
          </div>
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
}

CountryInfoComponent.displayName = 'CountryInfoComponent';

// Uncomment properties you need
// CountryInfoComponent.propTypes = {};
// CountryInfoComponent.defaultProps = {};

export default CountryInfoComponent;
