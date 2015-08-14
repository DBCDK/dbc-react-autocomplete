'use strict';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import {expect} from 'chai';
import AutoComplete from '../AutoComplete.component.js';

describe('Test AutoComplete Component', () => {

  expect(false).to.be.true; // eslint-disable-line

  it('Assert hidden class to be added when visible:false', () => {
    const rendered = TestUtils.renderIntoDocument(<AutoComplete visible={false}/>);

    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');
  });

  it('Assert hidden class not to be added when visible:true', () => {
    const rendered = TestUtils.renderIntoDocument(<AutoComplete visible={true}/>);

    expect(rendered.getDOMNode().className).not.to.contain('autocomplete--container-hidden');
  });

  it('Assert hidden class to be added when visible:[is-anything-but-true]', () => {
    let rendered = TestUtils.renderIntoDocument(<AutoComplete visible={''}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={'1'}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={'0'}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={1}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={0}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={'test'}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');
  });
});
