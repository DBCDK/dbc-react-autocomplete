'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @file Main autocomplete component
 */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _AutoCompleteCategoryAutoCompleteCategoryComponentJs = require('./../AutoCompleteCategory/AutoCompleteCategory.component.js');

var _AutoCompleteCategoryAutoCompleteCategoryComponentJs2 = _interopRequireDefault(_AutoCompleteCategoryAutoCompleteCategoryComponentJs);

exports['default'] = _react2['default'].createClass({
  displayName: 'AutoComplete.component',

  propTypes: {
    visible: _react2['default'].PropTypes.bool,
    data: _react2['default'].PropTypes.object
  },

  /*
   * Retrieves the categories from the data prop and renders a
   * AutoCompleteCategory for each category.
   *
   * @return {Array}
   */
  getCategories: function getCategories() {

    var categories = [];
    var data = this.props.data || {};

    (0, _lodash.forIn)(data, function (value, key) {
      categories.splice(value.weight, 0, _react2['default'].createElement(_AutoCompleteCategoryAutoCompleteCategoryComponentJs2['default'], { key: key, label: value.label, data: value.data }));
    });

    return categories;
  },

  render: function render() {
    var categories = this.getCategories();
    var classNames = 'autocomplete--container';
    classNames += this.props.visible === true ? '' : ' autocomplete--container-hidden';

    return _react2['default'].createElement(
      'div',
      { className: classNames },
      categories
    );
  }
});
module.exports = exports['default'];