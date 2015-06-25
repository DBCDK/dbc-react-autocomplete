'use strict';

/**
 * @file
 * Delivers a component representing one single category in the autocomplete
 * parent autocomplete component.
 */

import React from 'react';
import {isArray} from 'lodash';
import AutoCompleteRow from '../AutoCompleteRow/AutoCompleteRow.component.js';

var AutoCompleteCategory = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    label: React.PropTypes.string
  },

  getLabel(label) {
    return (
      <div className='autocomplete--category--label-container' >
        <span className='autocomplete--category--label' >{label}</span>
      </div>
    );
  },

  render() {
    let data = this.props.data || [];
    if (!isArray(data)) {
      data = new Array(data);
    }

    const label = this.props.label || null;
    let labelToRender = '';
    if (label) {
      labelToRender = this.getLabel(label);
    }

    let rows = [];
    data.forEach((value, key) => {
      rows.push(
        <AutoCompleteRow key={key} text={value.text} image={value.img} />);
    });

    return (
      <div className='autocomplete--category-container' >
        {labelToRender}
        <div className='autocomplete--category--rows-container' >
          {rows}
        </div>
      </div>
    );
  }
});

export default AutoCompleteCategory;
