'use strict';
/*eslint-disable spaced-line-comment */
import React from 'react/addons';
import {expect, assert} from 'chai';

import AutoCompleteCategory from '../AutoCompleteCategory.component.js';
import AutoCompleteRow from '../../AutoCompleteRow/AutoCompleteRow.component.js';

let TestUtils = React.addons.TestUtils;

describe('Assert no errors when no data is provided', () => {

  it('Assert no errors when no props are provided', () => {
    let rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory />);

    let needle = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--label').getDOMNode();
    assert.isNotNull(needle);
    expect(needle.textContent).equal('');
  });

  it('Assert label is correctly set', () => {
    //testing empty label
    let label = '';
    let rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory label={label}/>);

    let needle = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--label').getDOMNode();
    assert.isNotNull(needle);
    expect(needle.textContent).equal(label);

    //testing testlabel
    label = 'TestLabel';
    rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory label={label}/>);

    needle = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--label').getDOMNode();
    assert.isNotNull(needle);
    expect(needle.textContent).equal(label);
  });

  it('Assert props.data is handled correct', () => {
    //no data provided
    let rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory />);
    let rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');
    assert.equal(rowsContainer.props.children.length, 0);

    //data is provided but not in array
    let DATA = 'string-not-wrapped-in-array';
    rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory data={DATA}/>);
    rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');
    assert.equal(rowsContainer.props.children.length, 1);
    assert.isTrue(TestUtils.isElementOfType(rowsContainer.props.children[0], AutoCompleteRow), 'children element is of type AutoCompleteRow');
  });

  it('Assert correct rendering of AutoCompleteCategory component and children', () => {
    const DATA = ['test_0', 'test_1', 'test_2'];
    let rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory data={DATA}/>);
    let rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');

    assert.equal(rowsContainer.props.children.length, DATA.length);
    assert.isTrue(TestUtils.isElementOfType(rowsContainer.props.children[0], AutoCompleteRow), 'children element is of type AutoCompleteRow');
  });
});
