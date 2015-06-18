'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AutoCompleteRow = _react2['default'].createClass({
  displayName: 'AutoCompleteRow',

  render: function render() {
    var text = this.props.text || '';
    var image = this.props.image || null;
    var imageElement = null;

    if (image) {
      imageElement = this._getImage(image);
    }

    return _react2['default'].createElement(
      'div',
      { className: 'autocomplete--row' },
      _react2['default'].createElement(
        'a',
        { href: '#' },
        imageElement,
        _react2['default'].createElement(
          'div',
          { className: 'autocomplete--row-text' },
          text
        )
      )
    );
  },

  _getImage: function _getImage(image) {
    return _react2['default'].createElement(
      'div',
      { className: 'autocomplete--row-image' },
      _react2['default'].createElement('img', { src: image })
    );
  },

  propTypes: {
    text: _react2['default'].PropTypes.string,
    image: _react2['default'].PropTypes.string
  }
});

exports['default'] = AutoCompleteRow;
module.exports = exports['default'];