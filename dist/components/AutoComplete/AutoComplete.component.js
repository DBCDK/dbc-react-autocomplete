'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

//import _ from 'lodash';

var _AutoCompleteCategoryComponentJs = require('./../AutoCompleteCategory.component.js');

var _AutoCompleteCategoryComponentJs2 = _interopRequireDefault(_AutoCompleteCategoryComponentJs);

require('./AutoComplete.scss');

var _DATA = [{ label: 'author', data: ['Test', 'Hest', 'Fest', 'Gæst'] }];

var AutoComplete = _react2['default'].createClass({
  displayName: 'AutoComplete',

  render: function render() {
    var categories = this._getCategories();
    var classNames = 'autocomplete--container';
    classNames += this.props.visible === true ? '' : ' autocomplete--container-hidden';

    return _react2['default'].createElement(
      'div',
      { className: classNames },
      categories
    );
  },

  _getCategories: function _getCategories() {
    var categories = [];
    _DATA.forEach(function (value, key) {
      categories.push(_react2['default'].createElement(_AutoCompleteCategoryComponentJs2['default'], { key: key, label: value.label }));
    });

    return categories;
  }
});

exports['default'] = AutoComplete;
module.exports = exports['default'];