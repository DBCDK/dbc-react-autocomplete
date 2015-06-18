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

    const label = this.props.label || null;
    let labelToRender = '';
    if (label) {
      labelToRender = this._getLabel(label);
    }

    let rows = [];
    data.forEach((value, key) => {
      rows.push(
        <AutoCompleteRow key={key} text={value.text} image={value.img}/>);
    });

    return (
      <div className='autocomplete--category-container'>
        {labelToRender}
        <div className='autocomplete--category--rows-container'>
          {rows}
        </div>
      </div>
    );
  },

  _getLabel(label) {
    return (
      <div className='autocomplete--category--label-container'>
        <span className='autocomplete--category--label'>{label}</span>
      </div>
    );
  },

  propTypes: {
    data: React.PropTypes.array,
    label: React.PropTypes.string
  }
});

export default AutoCompleteCategory;
