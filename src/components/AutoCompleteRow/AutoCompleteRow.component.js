'use strict';
import React from 'react';

var AutoCompleteRow = React.createClass({
  render() {
    const text = this.props.text || '';
    const image = this.props.image || null;
    let imageElement = null;

    if (image) {
      imageElement = this._getImage(image);
    }

    return (
      <div className='autocomplete--row'>
        <a href="#">
          {imageElement}
          <div className='autocomplete--row-text'>{text}</div>
        </a>
      </div>
    );
  },

  _getImage(image) {
    return (
      <div className='autocomplete--row-image'><img src={image}/></div>
    );
  },

  propTypes: {
    text: React.PropTypes.string,
    image: React.PropTypes.string
  }
});

export default AutoCompleteRow;
