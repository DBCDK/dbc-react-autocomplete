'use strict';

import React from 'react';
import AutoComplete from '../src/components/AutoComplete/AutoComplete.component.js';

let SearchField = React.createClass({

  render() {
    return (
      <div>
        <input type='text' placeholder='Search' size='50'/>
        <AutoComplete />
      </div>
    );
  }
});

let element = React.createElement(SearchField);
React.render(element, document.getElementById('searchfield'));
