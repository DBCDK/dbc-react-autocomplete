'use strict';

/**
 * @file
 * Renders the single row in the parent autocomplete component.
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AutoCompleteRow = _react2['default'].createClass({
  displayName: 'AutoCompleteRow',
  propTypes: {
    href: _react2['default'].PropTypes.string,
    image: _react2['default'].PropTypes.string,
    pid: _react2['default'].PropTypes.string,
    text: _react2['default'].PropTypes.string
  },

  getImage: function getImage(image) {
    return _react2['default'].createElement(
      'div',
      { className: 'autocomplete--row-image' },
      _react2['default'].createElement('img', { src: image })
    );
  },

  render: function render() {
    var text = this.props.text || '';
    var image = this.props.image || null;
    var href = this.props.href || '#';
    var imageElement = image ? this.getImage(image) : null;

    return _react2['default'].createElement(
      'div',
      { className: 'autocomplete--row' },
      _react2['default'].createElement(
        'a',
        { href: href },
        imageElement,
        _react2['default'].createElement(
          'div',
          { className: 'autocomplete--row-text' },
          text
        )
      )
    );
  }
});

exports['default'] = AutoCompleteRow;
module.exports = exports['default'];