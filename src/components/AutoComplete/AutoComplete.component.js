'use strict';

import React from 'react';
import AutoCompleteCategory from './../AutoCompleteCategory.component.js';

import './AutoComplete.scss';

const _DATA = {};

let AutoComplete = React.createClass({
  render() {
    let categories = [];

    return (
      <div className='autocomplete--container'>
        {categories}
      </div>
    );
  }
});

export default AutoComplete;
