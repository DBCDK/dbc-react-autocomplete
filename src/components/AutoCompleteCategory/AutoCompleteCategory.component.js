'use strict';
import React from 'react';
import {isArray} from 'lodash';
import AutoCompleteRow from '../AutoCompleteRow/AutoCompleteRow.component.js';

var AutoCompleteCategory = React.createClass({
  render() {
    let data = this.props.data || [];
    if (!isArray(data)) {
      data = new Array(data);
    }

    let rows = [];
    data.forEach((value, key) => {
      rows.push(<AutoCompleteRow key={key} text={value}/>);
    });

    return (
      <div>
        <div className='autocomplete--category--label-container'>
          <span className='autocomplete--category--label'>{this.props.label}</span>
        </div>
        <div className='autocomplete--category--rows-container'>
          {rows}
        </div>
      </div>
    );
  }
});

export default AutoCompleteCategory;
