'use strict';

/**
 * @file
 * Renders the single row in the parent autocomplete component.
 */

import React from 'react';

var AutoCompleteRow = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    image: React.PropTypes.string
  },

  getImage(image) {
    return (
      <div className='autocomplete--row-image' ><img src={image} /></div>
    );
  },

  render() {
    const text = this.props.text || '';
    const image = this.props.image || null;
    let imageElement = null;

    if (image) {
      imageElement = this.getImage(image);
    }

    return (
      <div className='autocomplete--row' >
        <a href="#" >
          {imageElement}
          <div className='autocomplete--row-text' >{text}</div>
        </a>
      </div>
    );
  }
});

export default AutoCompleteRow;
