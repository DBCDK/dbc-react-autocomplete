'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _chai = require('chai');

var _AutoCompleteComponentJs = require('../AutoComplete.component.js');

var _AutoCompleteComponentJs2 = _interopRequireDefault(_AutoCompleteComponentJs);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('Test AutoComplete Component', function () {

  it('Assert hidden class to be added when visible:false', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteComponentJs2['default'], { visible: false }));

    (0, _chai.expect)(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');
  });

  it('Assert hidden class not to be added when visible:true', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteComponentJs2['default'], { visible: true }));

    (0, _chai.expect)(rendered.getDOMNode().className).not.to.contain('autocomplete--container-hidden');
  });

  it('Assert hidden class to be added when visible:[is-anything-but-true]', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteComponentJs2['default'], { visible: '' }));
    (0, _chai.expect)(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteComponentJs2['default'], { visible: '1' }));
    (0, _chai.expect)(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteComponentJs2['default'], { visible: '0' }));
    (0, _chai.expect)(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteComponentJs2['default'], { visible: 1 }));
    (0, _chai.expect)(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteComponentJs2['default'], { visible: 0 }));
    (0, _chai.expect)(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_AutoCompleteComponentJs2['default'], { visible: 'test' }));
    (0, _chai.expect)(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');
  });
});