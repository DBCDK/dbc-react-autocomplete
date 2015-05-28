'use strict';
import React from 'react';

var AutoCompleteRow = React.createClass({
  render() {
    const text = this.props.text || '';
    return (
      <div>
        <span>{text}</span>
      </div>
    );
  }
});

export default AutoCompleteRow;
