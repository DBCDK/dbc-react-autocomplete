'use strict';

import React from 'react';
import AutoComplete from '../src/components/AutoComplete/AutoComplete.component.js';

const _DATA = [{label: 'author', data: ['Test Hest', 'Hest Hest', 'Fest Hest', 'Gæst Hest']}];

let SearchField = React.createClass({
  render() {
    return (
      <div>
        <input type='text' placeholder='Search' size='50'/>
        <AutoComplete visible={true} data={_DATA}/>
      </div>
    );
  }
});

let element = React.createElement(SearchField);
React.render(element, document.getElementById('searchfield'));
