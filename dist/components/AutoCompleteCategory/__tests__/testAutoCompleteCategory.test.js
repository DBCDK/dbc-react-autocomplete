'use strict';
/* eslint-disable spaced-line-comment */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _chai = require('chai');

var _AutoCompleteCategoryComponentJs = require('../AutoCompleteCategory.component.js');

var _AutoCompleteCategoryComponentJs2 = _interopRequireDefault(_AutoCompleteCategoryComponentJs);

var _AutoCompleteRowAutoCompleteRowComponentJs = require('../../AutoCompleteRow/AutoCompleteRow.component.js');

var _AutoCompleteRowAutoCompleteRowComponentJs2 = _interopRequireDefault(_AutoCompleteRowAutoCompleteRowComponentJs);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('Test AutoCompleteCategory Component', function () {

  it('Assert no errors when no props are provided', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteCategoryComponentJs2['default'], null));

    var container = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category-container').getDOMNode();

    (0, _chai.expect)(container.textContent).equal('');
  });

  it('Assert no rendering of labelblock when label is empty', function () {
    // testing empty label
    var label = '';
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteCategoryComponentJs2['default'], { label: label }));

    var needle = TestUtils.scryRenderedDOMComponentsWithClass(rendered, 'autocomplete--category--label');
    _chai.assert.lengthOf(needle, 0, 'no DOM objects with className=\'autocomplete--category--label\' found');

    // testing testlabel
    label = 'TestLabel';
    rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteCategoryComponentJs2['default'], { label: label }));

    needle = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--label').getDOMNode();
    _chai.assert.isNotNull(needle);
    (0, _chai.expect)(needle.textContent).equal(label);
  });

  it('Assert no label-container is rendered when no label is provided', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteCategoryComponentJs2['default'], null));
    var label = TestUtils.scryRenderedDOMComponentsWithClass(rendered, 'autocomplete--category--label');
    _chai.assert.lengthOf(label, 0, 'no DOM objects with className=\'autocomplete--category--label\' found');
  });

  it('Assert props.data is handled correct', function () {
    // no data provided
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteCategoryComponentJs2['default'], null));
    var rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');
    _chai.assert.equal(rowsContainer.props.children.length, 0);

    // data is provided but not in array
    var DATA = 'string-not-wrapped-in-array';
    rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteCategoryComponentJs2['default'], { data: DATA }));
    rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');
    _chai.assert.equal(rowsContainer.props.children.length, 1);
    _chai.assert.isTrue(TestUtils.isElementOfType(rowsContainer.props.children[0], _AutoCompleteRowAutoCompleteRowComponentJs2['default']), 'children element is of type AutoCompleteRow');
  });

  it('Assert correct rendering of AutoCompleteCategory component and children', function () {
    var DATA = ['test_0', 'test_1', 'test_2'];
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteCategoryComponentJs2['default'], { data: DATA }));
    var rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');

    _chai.assert.equal(rowsContainer.props.children.length, DATA.length);
    _chai.assert.isTrue(TestUtils.isElementOfType(rowsContainer.props.children[0], _AutoCompleteRowAutoCompleteRowComponentJs2['default']), 'children element is of type AutoCompleteRow');
  });
});