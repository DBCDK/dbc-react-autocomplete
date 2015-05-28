'use strict';
import React from 'react';

var AutoCompleteRow = React.createClass({
  render() {
    const text = this.props.text || '';
    return (
      <div className='autocomplete--row'>
        <span>{text}</span>
      </div>
    );
  }
});

export default AutoCompleteRow;
