'use strict';

require('styles//Map.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux"

import { translateFrom3CodeTo2Code } from '../actions/CountriesAction'

@connect((store) => {
  return { 
    country: store.country,
    countrySelect: store.countrySelect
  };
})
class MapComponent extends React.Component {

  componentDidMount() {
    window.initMap = this.initMap.bind(this);
    this.loadJS('https://maps.googleapis.com/maps/api/js?key=&callback=initMap')
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(30, 0),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    let borders = this.props.country.borders.map(function(item) { return `'${translateFrom3CodeTo2Code(item)}'`}).toString();
    var layer = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
        where: `ISO_2DIGIT IN (${borders})`
      }
    });
    layer.setMap(map);

    var layer1 = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
        where: `ISO_2DIGIT IN ('${this.props.country.code}')`
      },
      styles: [
        { polygonOptions: { fillColor: '#0040FF', fillOpacity: 0.1, strokeColor: '#FF0000', strokeWeight: 2, strokeOpacity: 0.6 } }
      ]
    });
    layer1.setMap(map);

  }

  loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }

  setMapElementReference(mapElementReference) {
    this.mapElement = mapElementReference;
  }

  render() {
    console.log('render')
    
    window.initMap = this.initMap.bind(this);
    this.loadJS('https://maps.googleapis.com/maps/api/js?key=&callback=initMap')
 

    return (
      <div className="index">
        <div id='map' ref={this.setMapElementReference.bind(this)}></div>
      </div>
    );
  }
}

export default MapComponent;
