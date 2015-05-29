'use strict';
import React from 'react';

import './AutoCompleteRow.scss';

var AutoCompleteRow = React.createClass({
  render() {
    const text = this.props.text || '';
    const image = this.props.image || '';
    return (
      <div className='autocomplete--row'>
        <a href="#">
          <div className='autocomplete--row-image'><img src={image}/></div>
          <div className='autocomplete--row-text'>{text}</div>
        </a>
      </div>
    );
  }
});

export default AutoCompleteRow;
