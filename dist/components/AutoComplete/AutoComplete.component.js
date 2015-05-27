'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoCompleteCategoryComponentJs = require('./../AutoCompleteCategory.component.js');

var _AutoCompleteCategoryComponentJs2 = _interopRequireDefault(_AutoCompleteCategoryComponentJs);

require('./AutoComplete.scss');

var _DATA = {};

var AutoComplete = _react2['default'].createClass({
  displayName: 'AutoComplete',

  render: function render() {
    var categories = [];

    return _react2['default'].createElement(
      'div',
      { className: 'autocomplete--container' },
      categories
    );
  }
});

exports['default'] = AutoComplete;
module.exports = exports['default'];