'use strict';

import React from 'react';
import AutoComplete from '../src/components/AutoComplete/AutoComplete.component.js';

const _DATA = [
  {
    label: 'Title',
    data: [
      {
        text: 'Test Hest',
        img: 'http://dummyimage.com/50x50/000/fff'
      },
      {
        text: 'Hest Hest',
        img: 'http://dummyimage.com/50x50/000/fff'
      },
      {
        text: 'Fest Hest',
        img: 'http://dummyimage.com/50x50/000/fff'
      },
      {
        text: 'Gæst Hest',
        img: 'http://dummyimage.com/50x50/000/fff'
      }
    ]
  },
  {
    label: 'Author',
    data: [
      {
        text: 'Test Hest',
        img: 'http://dummyimage.com/50x50/000/fff'
      },
      {
        text: 'Hest Hest',
        img: ''
      },
      {
        text: 'Fest Hest',
        img: ''
      },
      {
        text: 'Gæst Hest',
        img: ''
      }
    ]
  }
];

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
