'use strict';
import React from 'react';

var AutoCompleteCategory = React.createClass({
  render() {
    console.log(this.props);

    return (
      <div>
        <h2>{this.props.label}</h2>
      </div>
    );
  }
});

export default AutoCompleteCategory;
