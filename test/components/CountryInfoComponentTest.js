/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import CountryInfoComponent from 'components//CountryInfoComponent.js';

describe('CountryInfoComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(CountryInfoComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('countryinfo-component');
  });
});
