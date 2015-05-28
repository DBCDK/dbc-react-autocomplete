'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AutoCompleteCategory = _react2['default'].createClass({
  displayName: 'AutoCompleteCategory',

  render: function render() {
    console.log(this.props);

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: 'autocomplete--category--label-container' },
        _react2['default'].createElement(
          'span',
          { className: 'autocomplete--category--label' },
          this.props.label
        )
      )
    );
  }
});

exports['default'] = AutoCompleteCategory;
module.exports = exports['default'];