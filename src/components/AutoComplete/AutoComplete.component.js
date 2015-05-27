'use strict';

import React from 'react';
import AutoCompleteCategory from './../AutoCompleteCategory.component.js';

import './AutoComplete.scss';

let AutoComplete = React.createClass({
  render() {
    let categories = this._getCategories();
    let classNames = 'autocomplete--container';
    classNames += (this.props.visible === true) ? '' : ' autocomplete--container-hidden';

    return (
      <div className={classNames} >
        {categories}
      </div>
    );
  },

  _getCategories() {
    let categories = [];
    let data = this.props.data || [];
    data.forEach((value, key) => {
      categories.push(<AutoCompleteCategory key={key} label={value.label} />);
    });

    return categories;
  }
});

export default AutoComplete;
