'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _chai = require('chai');

var TestUtils = _reactAddons2['default'].addons.TestUtils;

var AutoComplete = require('../AutoComplete.component');

describe('Test AutoComplete Component', function () {

  it('Assert hidden class is aadded to element when visible:false', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(AutoComplete, { visible: false }));
    console.log(rendered.getDOMNode().className);
  });

  it('Test visibility', function () {
    console.log('hesy');
  });
});