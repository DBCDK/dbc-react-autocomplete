'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoCompleteCategoryAutoCompleteCategoryComponentJs = require('./../AutoCompleteCategory/AutoCompleteCategory.component.js');

var _AutoCompleteCategoryAutoCompleteCategoryComponentJs2 = _interopRequireDefault(_AutoCompleteCategoryAutoCompleteCategoryComponentJs);

require('./AutoComplete.scss');

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
    var data = this.props.data || [];
    data.forEach(function (value, key) {
      categories.push(_react2['default'].createElement(_AutoCompleteCategoryAutoCompleteCategoryComponentJs2['default'], { key: key, label: value.label, data: value.data }));
    });

    return categories;
  }
});

exports['default'] = AutoComplete;
module.exports = exports['default'];