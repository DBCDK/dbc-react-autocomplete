'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _chai = require('chai');

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('Test True', function () {

  it('Assert true is true', function () {
    (0, _chai.expect)(true).to.be(true);
  });
});